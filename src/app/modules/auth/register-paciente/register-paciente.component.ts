import { MatDialog } from '@angular/material/dialog';
import { ErrorAlertComponent } from './../../../shared/error-alert/error-alert.component';
import { ApiService } from './../../../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-paciente',
  templateUrl: './register-paciente.component.html',
  styleUrls: ['./register-paciente.component.scss']
})
export class RegisterPacienteComponent implements OnInit{

  formUser: FormGroup
  formUser2: FormGroup
  formUser3: FormGroup
  uno: boolean = true
  dos: boolean = false
  tres: boolean = false

  pagNext: boolean = false
  pagPrev: boolean = true

  messageError = ''
  imagenes:Array<any> =  []
  validEmail: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor ( private formbuilder: FormBuilder, private apiService: ApiService, private dialog: MatDialog ){
    this.formUser = formbuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.validEmail)]],
    })

    this.formUser2 = formbuilder.group({
      contraseña: ['', Validators.required],
      contraseña2: ['', Validators.required],
    })

    this.formUser3 = formbuilder.group({
      image: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.images()
  }

  next(){
    if(this.formUser.value.nombre != '' && this.formUser.value.apellido != '' && this.formUser.value.email != '') {
      this.uno = false
      this.dos = true
      this.tres = false
    } else {
      this.messageError = 'Faltan datos'
      this.openDialogError()
    }

    console.log(this.messageError)
  }

  next2(){
    if (this.formUser.value.contraseña != '' && this.formUser.value.contraseña2 != ''){
      this.uno = false
      this.dos = false
      this.tres = true
    } else {
      this.messageError = 'Faltan datos'
      this.openDialogError()
    }
  }

  registar(){
    const form = new FormData()
    form.append('nombre', this.formUser.value.nombre)
    form.append('apellido', this.formUser.value.apellido)
    form.append('email', this.formUser.value.email)
    form.append('password', this.formUser2.value.contraseña)
    // form.append('image', this.formUser.value.image.filePath, this.formUser.value.image.fileName)
    this.apiService.register(form, 'registerp').subscribe({
      next:(res)=> {
        if (res.response === 'Success') {
          this.pagNext = true
          this.pagPrev = false
      }else {
        this.messageError = res.message
        this.openDialogError()
      }
      }, error: (err)=> {
        console.log(err)
      }
    })
  }

  images(){
    this.apiService.getImages().subscribe({
      next:(res)=> {
        if (res.response === 'Success'){
          this.imagenes = res.images
        }
      }
    })
  }

  //error dialog
  openDialogError(): void {
    const dialog = this.dialog.open(ErrorAlertComponent, {
      data: {message: this.messageError}
    }
    );
    dialog.afterClosed().subscribe();
  }
}
