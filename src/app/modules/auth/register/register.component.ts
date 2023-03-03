import { MatDialog } from '@angular/material/dialog';
import { ErrorAlertComponent } from './../../../shared/error-alert/error-alert.component';
import { ConfirmAlertComponent } from './../../../shared/confirm-alert/confirm-alert.component';
import { ApiService } from './../../../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  messageError2: any
  formUser: FormGroup
  validEmail: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  messageError= { message: '', color: 'black' };
  constructor( private formbuilder: FormBuilder, private apiService:ApiService, public dialog: MatDialog ){
    this.formUser = formbuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.validEmail)]],
      contraseña: ['', Validators.required],
      id: ['', Validators.required],
      fecha: ['', Validators.required],
      rol: ['Selecciona un rol', Validators.required],
      terminos: [true, Validators.required],
      cedulaProfesional: [''],
    })
  }
  ngOnInit(): void {
  }


  registrar(){
    if (this.formUser.value.rol === 'terapeuta') this.registroTerapeutas()
    else if (this.formUser.value.rol === 'paciente') this.registroPacientes()
    else this.messageError = {message: 'Selecciona Rol', color: 'Red'}
  }

  registroPacientes(){
    const form = new FormData()
    form.append('nombre', this.formUser.value.nombre)
    form.append('apellido', this.formUser.value.apellido)
    form.append('id', this.formUser.value.id)
    form.append('email', this.formUser.value.email.toLowerCase())
    form.append('password', this.formUser.value.contraseña)
    form.append('fecha', this.formUser.value.fecha)
    form.append('rol', this.formUser.value.rol)

    this.apiService.register(form, 'registerp').subscribe({
      next:(res)=> {
        console.log(res)
        if (res.response === 'Success') {
          this.messageError2 = res.message
          this.openDialogConfirm()
        }
        else {
          this.messageError2 = res.message
          this.openDialogError()
          console.log(res)
        }
      }, error: (err)=> {
        console.log()
      }
    })
  }

  registroTerapeutas(){
    const form = new FormData()
    form.append('nombre', this.formUser.value.nombre)
    form.append('apellido', this.formUser.value.apellido)
    form.append('id', this.formUser.value.id)
    form.append('email', this.formUser.value.email.toLowerCase())
    form.append('password', this.formUser.value.contraseña)
    form.append('fecha', this.formUser.value.fecha)
    form.append('cedula', this.formUser.value.cedulaProfesional)
    form.append('rol', this.formUser.value.rol)

    this.apiService.register(form, 'registert').subscribe({
      next:(res)=> {
        console.log(res)
      }, error: (err)=> {
        console.log()
      }
    })
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
      data: {message: this.messageError2}
    }
    );
    dialog.afterClosed().subscribe();
  }

}
