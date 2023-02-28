import { ApiService } from './../../../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formUser: FormGroup
  validEmail: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  messageError= { message: '', color: 'black' };
  constructor( private formbuilder: FormBuilder, private apiService:ApiService ){
    this.formUser = formbuilder.group({
      nombreCompleto: ['', Validators.required],
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
    form.append('id', this.formUser.value.id)
    form.append('email', this.formUser.value.email.toLowerCase())
    form.append('password', this.formUser.value.contraseña)
    form.append('fecha', this.formUser.value.fecha)
    form.append('rol', this.formUser.value.rol)

    this.apiService.register(form).subscribe({
      next:(res)=> {
        console.log(res)
      }
    })
  }

  registroTerapeutas(){
    const form = new FormData()
    form.append('nombre', this.formUser.value.nombre)
    form.append('id', this.formUser.value.id)
    form.append('email', this.formUser.value.email.toLowerCase())
    form.append('password', this.formUser.value.contraseña)
    form.append('fecha', this.formUser.value.fecha)
    form.append('cedula', this.formUser.value.cedila)
    form.append('rol', this.formUser.value.rol)

    this.apiService.register(form).subscribe({
      next:(res)=> {
        console.log(res)
      }
    })
  }


}
