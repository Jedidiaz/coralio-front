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
  constructor( private formbuilder: FormBuilder, private apiService:ApiService ){
    this.formUser = formbuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      contraseña: ['', Validators.required],
      rol: ['Selecciona un rol', Validators.required],
      terminos: [true, Validators.required],
    })
  }
  ngOnInit(): void {
  }


  registrar(){
    const form = new FormData()
    form.append('nombre', this.formUser.value.nombre)
    form.append('apellido', this.formUser.value.apellio)
    form.append('email', this.formUser.value.email)
    form.append('password', this.formUser.value.contraseña)
    form.append('rol', this.formUser.value.rol)

    this.apiService.register(form).subscribe({
      next:(res)=> {
        console.log(res)
      }
    })
  }

}
