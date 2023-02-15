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
      password: ['', Validators.required],
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
    this.apiService.updateAdmin(form, 'editp', this.idE).subscribe({
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
    this.apiService.getUserLogged().subscribe({
      next: (res) => {
        console.log(res);
        if (res.response === 'Success') {
          console.log(res.datainfo)
          this.formUser.setValue({
            nombre: res.datainfo.nombre,
            apellido: res.datainfo.apellido,
            email: res.datainfo.email,
            telefono: res.datainfo.telefono,
            password: '',
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
}
