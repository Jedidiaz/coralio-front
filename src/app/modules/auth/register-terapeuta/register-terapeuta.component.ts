import { MatDialog } from '@angular/material/dialog';
import { ErrorAlertComponent } from './../../../shared/error-alert/error-alert.component';
import { ApiService } from './../../../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-terapeuta',
  templateUrl: './register-terapeuta.component.html',
  styleUrls: ['./register-terapeuta.component.scss']
})
export class RegisterTerapeutaComponent implements OnInit{
  formUser: FormGroup
  formUser2: FormGroup
  formUser3: FormGroup
  formUser4: FormGroup
  uno: boolean = true
  dos: boolean = false
  tres: boolean = false
  cuatro: boolean = false
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
      id: ['', Validators.required],
      cedula: ['', Validators.required],
      genero: ['Selecciona un genero', Validators.required],
      fecha: ['', Validators.required],
      image: ['', Validators.required],
    })

    this.formUser3 = formbuilder.group({
      id: ['', Validators.required],
      cedula: ['', Validators.required],
      genero: ['Selecciona un genero', Validators.required],
      fecha: ['', Validators.required],
    })

    this.formUser4 = formbuilder.group({
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
      this.cuatro = false
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
      this.cuatro = false
    } else {
      this.messageError = 'Faltan datos'
      this.openDialogError()
    }
  }

  next3(){
    if (this.formUser.value.contraseña != '' && this.formUser.value.contraseña2 != ''){
      this.uno = false
      this.dos = false
      this.tres = false
      this.cuatro = true
    } else {
      this.messageError = 'Faltan datos'
      this.openDialogError()
    }
  }


  registar(){
    if (this.formUser.valid){
      const form = new FormData()
      form.append('nombre', this.formUser.value.nombre)
      form.append('apellido', this.formUser.value.apellido)
      form.append('email', this.formUser.value.email.toLowerCase())
      form.append('password', this.formUser2.value.contraseña)
      form.append('fecha', this.formUser3.value.fecha)
      form.append('identificacion', this.formUser3.value.id)
      form.append('tarjetap', this.formUser3.value.cedula)
      form.append('genero', this.formUser3.value.genero)
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
