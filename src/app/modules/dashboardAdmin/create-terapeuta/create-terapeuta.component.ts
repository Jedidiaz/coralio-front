import { ErrorAlertComponent } from './../../../shared/error-alert/error-alert.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAlertComponent } from './../../../shared/confirm-alert/confirm-alert.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../../../services/api.service';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { DataInfoAdminModel } from 'src/app/Models/AdminModels.interface';

@Component({
  selector: 'app-create-terapeuta',
  templateUrl: './create-terapeuta.component.html',
  styleUrls: ['./create-terapeuta.component.scss'],
})
export class CreateTerapeutaComponent implements OnInit {
  @Output() atras = new EventEmitter<boolean>();
  @Input() data!: string;
  @Input() idE!: string;

  formUser: FormGroup;
  video: any;
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
      cedula: ['', Validators.required],
      especialidad: ['', Validators.required],
      descripcion: ['', Validators.required],
      password: ['', Validators.required],
      video: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.data === 'edit') this.getTerapeutasEdit();
  }

  createOrNew() {
    if (this.data === 'new') this.CreateTerapeutas();
    else if (this.data === 'edit') {
      console.log('edit')
      this.UpdateTerapeutas();}
  }

  //video
  onFileSelected($event: any): any {
    if ($event.target.files.length > 0) {
      const [file] = $event.target.files;
      this.video = {
        fileRaw: file,
        fileName: file.name,
      };
      console.log(this.video);
    }
  }

  //Actions
  CreateTerapeutas() {
    const form = new FormData();
    form.append('nombre', this.formUser.value.nombre);
    form.append('apellido', this.formUser.value.apellido);
    form.append('email', this.formUser.value.email);
    form.append('telefono', this.formUser.value.telefono);
    form.append('especialidad', this.formUser.value.especialidad);
    form.append('cedula', this.formUser.value.cedula);
    form.append('descripcion', this.formUser.value.descripcion);
    form.append('password', this.formUser.value.password);
    form.append('video', this.video.fileRaw, this.video.fileName);
    this.apiService.createAdmin(form, 'createt').subscribe({
      next: (res) => {
        console.log(res)
        if (res.response === 'Success') {
          this.messageError = res.message
          this.openDialogConfirm()
          this.formUser.reset()
        }
        else {
          this.messageError = res.message
          this.openDialogError()
          console.log(res)
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //actualizar

  UpdateTerapeutas() {
    const form = new FormData();
    form.append('nombre', this.formUser.value.nombre);
    form.append('apellido', this.formUser.value.apellido);
    form.append('email', this.formUser.value.email);
    form.append('telefono', this.formUser.value.telefono);
    form.append('especialidad', this.formUser.value.especialidad);
    form.append('cedula', this.formUser.value.cedula);
    form.append('descripcion', this.formUser.value.descripcion);
    this.apiService.updateAdmin(form, 'editti', this.idE).subscribe({
      next: (res) => {
        if (res.response === 'Success') {
          this.messageError = res.message
          this.openDialogConfirm()
          this.formUser.reset()
        }
        else {
          this.messageError = res.message
          this.openDialogError()
          console.log(res)
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //datos edit
  getTerapeutasEdit() {
    this.apiService.getAdminById('seet', this.idE).subscribe({
      next: (res) => {
        console.log(res);
        if (res.response === 'Success') {
          this.formUser.setValue({
            nombre: res.datainfo.nombre,
            apellido: res.datainfo.apellido,
            email: res.datainfo.email,
            telefono: res.datainfo.telefono,
            cedula: res.datainfo.cedula,
            especialidad: res.datainfo.especialidad,
            descripcion: res.datainfo.descripcion,
            password: '',
            video: '',
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
    dialog.afterClosed().subscribe((res) => console.log(res));
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
    const form = new FormData();
    form.append('password', this.formUser.value.password);
    this.apiService.updateAdminPassword(form, this.idE).subscribe({
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

  //actualizar video
  updateVideo() {
    const form = new FormData();
    form.append('video', this.video.fileRaw, this.video.fileName);
    this.apiService.updateAdminVideo(form, 'edittv', this.idE).subscribe({
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
