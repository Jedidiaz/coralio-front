import { ErrorAlertComponent } from './../../../shared/error-alert/error-alert.component';
import { ConfirmAlertComponent } from './../../../shared/confirm-alert/confirm-alert.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from './../../../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-terapeuta',
  templateUrl: './perfil-terapeuta.component.html',
  styleUrls: ['./perfil-terapeuta.component.scss']
})
export class PerfilTerapeutaComponent implements OnInit {
  @Output() atras = new EventEmitter<boolean>();
  @Input() data!: string;
  @Input() idE!: string;

  formUser: FormGroup;
  video: any;
  img: any
  messageError: any

  constructor(
    private apiService: ApiService,
    private formbuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.formUser = formbuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      especialidad: ['', Validators.required],
      descripcion: ['', Validators.required],
      cedula: ['', Validators.required],
      password: ['', Validators.required],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getTerapeutasEdit();
  }

  createOrNew() {
    this.UpdateTerapeutas();
  }

  //Actions

  //actualizar

  UpdateTerapeutas() {
    const form = new FormData();
    form.append('nombre', this.formUser.value.nombre);
    form.append('apellido', this.formUser.value.apellido);
    form.append('email', this.formUser.value.email);
    form.append('telefono', this.formUser.value.telefono);
    form.append('especialidad', this.formUser.value.especialidad);
    form.append('descripcion', this.formUser.value.descripcion);
    form.append('cedula', this.formUser.value.cedula);
    this.apiService.updateUserInfo(form, 'terapeuta/editi',).subscribe({
      next: (res) => {
        if (res.response === 'Success') {
          this.messageError = res.message
          this.openDialogConfirm()
        }
        else {
          this.messageError = res.message
          this.openDialogError()
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //datos edit
  getTerapeutasEdit() {
    this.apiService.getUserLogged().subscribe({
      next: (res) => {
        console.log(res)
        if (res.response === 'Success') {
          this.formUser.setValue({
            nombre: res.user.nombre,
            apellido: res.user.apellido,
            email: res.user.email,
            telefono: res.user.telefono,
            cedula: res.user.cedula,
            especialidad: res.user.especialidad,
            descripcion: res.user.descripcion,
            password: '',
            password1: '',
            password2: '',
          });
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //confirm dialog|
  openDialogConfirm(): void {
    const dialog = this.dialog.open(ConfirmAlertComponent, {
      data: {message: this.messageError}
    });
    dialog.afterClosed().subscribe();
  }

  //error dialog
  openDialogError(): void {
    const dialog = this.dialog.open(ErrorAlertComponent, {
      data: {message: this.messageError}
    }
    );
    dialog.afterClosed().subscribe();
  }

  //atras
  backToTera() {
    this.atras.emit(false);
  }

  //actualizar passwortd
  updatePassword() {
    const body = new FormData();
    body.append('passwordOld', this.formUser.value.password)
    body.append('passwordNew1', this.formUser.value.password1)
    body.append('passwordNew2', this.formUser.value.password2)
    this.apiService.updateUserInfo(body ,'terapeuta/editpass').subscribe({
      next: (res) => {
        if (res.response === 'Success') {
          this.messageError = res.message
          this.openDialogConfirm()
        }
        else {
          this.messageError = res.message
          this.openDialogError()
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //selectVideo
  onVideoSelected($event: any): any {
    if ($event.target.files.length > 0) {
      const [file] = $event.target.files;
      this.img = {
        fileRaw: file,
        fileName: file.name,
      };
    }
  }

  // selectImage
  onImageSelected($event: any): any {
    if ($event.target.files.length > 0) {
      const [file] = $event.target.files;
      this.video = {
        fileRaw: file,
        fileName: file.name,
      };
      console.log(this.video);
    }
  }

  //actualizar file
  updateFile(video: boolean) {
    let info = {url: '', name: '', data1: '', data2: ''}
    const form = new FormData();
    if(video) info = {url: 'terapeuta/editv', name: 'video', data1: this.video.fileRaw, data2: this.video.fileName}
    else info = {url: 'terapeuta/editimg', name: 'imgpro', data1: this.img.fileRaw, data2: this.img.fileName}
    form.append(info.name, info.data1, info.data2);
    this.apiService.updateUserInfo(form, info.url).subscribe({
      next: (res) => {
        if (res.response === 'Success') {
          this.messageError = res.message
          this.openDialogConfirm()
        }
        else {
          this.messageError = res.message
          this.openDialogError()
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
