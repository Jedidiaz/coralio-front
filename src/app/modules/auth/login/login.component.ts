import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  select: boolean = false
  terapeuta: boolean = false
  formLogin: FormGroup
  validEmail: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  message = {message: '', color: 'black'}

  constructor(private formbuilder: FormBuilder, private apiService: ApiService){
    this.formLogin = formbuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.validEmail)]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {

  }

  selected(){
    this.select = true
    document.getElementById('options')!.style.display = 'none'
    this.terapeuta = false
  }

  selected2(){
    this.select = true
    this.terapeuta = true
    document.getElementById('options')!.style.display = 'none'
  }

  loginPaciente(){
    const form = new FormData()
    form.append('email', this.formLogin.value.email)
    form.append('password', this.formLogin.value.password)
    this.apiService.loginP(form)
      .subscribe({
        next: (res)=> {
          if(res.response === 'Success'){
            localStorage.setItem('token', res.token!)
            this.message = {
              message: res.message,
              color: 'green'
            }
            if(res.rol === 'admin'){
              window.location.href = "/admin"
            }else {
              window.location.href = "/cliente"
            }
          }else {
            this.message = {
              message: res.message,
              color: 'red'
            }
            this.formLogin.reset()
          }
        },error: (err)=> console.log(err)
      })
  }

  loginTerapeuta(){
    const form = new FormData()
    form.append('email', this.formLogin.value.email)
    form.append('password', this.formLogin.value.password)
    this.apiService.loginT(form)
      .subscribe({
        next: (res)=> {
          if(res.response === 'Success'){
            localStorage.setItem('token', res.token!)
            this.message = {
              message: res.message,
              color: 'green'
            }
            if(res.rol === 'admin'){
              window.location.href = "/admin"
            }else {
              window.location.href = "/terapeuta"
            }
          }else {
            this.message = {
              message: res.message,
              color: 'red'
            }
            this.formLogin.reset()
          }
        },error: (err)=> console.log(err)
      })
  }

}
