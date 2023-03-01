import { ApiService } from './../../../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-inicio',
  templateUrl: './first-inicio.component.html',
  styleUrls: ['./first-inicio.component.scss'],
})
export class FirstInicioComponent implements OnInit {
  formPrefer: FormGroup;
  uno: boolean = true;
  dos: boolean = false;
  tres: boolean = false;
  cuatro: boolean = false;
  nombre: any = 'Nombre';
  preferencias: any = {especialidad: '', genero: '', edad: '', precio: ''}

  constructor(
    private formbuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.formPrefer = formbuilder.group({
      especialidad: ['', Validators.required],
      genero: ['', Validators.required],
      edad: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  getUser() {
    this.apiService.getUserLogged().subscribe({
      next: (res) => {
        console.log(res);
        this.nombre = res.user.nombre;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  next(target: any) {
    this.uno = false;
    this.dos = true;
    this.tres = false;
    this.cuatro = false;
    this.preferencias.especialidad = target
  }

  next1(target: any) {
    this.uno = false;
    this.dos = false;
    this.tres = true;
    this.cuatro = false;
    this.preferencias.genero = target
  }

  next2(target: any) {
    this.uno = false;
    this.dos = false;
    this.tres = false;
    this.cuatro = true;
    this.preferencias.genero = target
  }

  prefer(target: any) {
    console.log(target)
    const data = `${this.formPrefer.value.edad},${this.formPrefer.value.genero},${this.formPrefer.value.precio},${this.formPrefer.value.especialidad}`;
    console.log(data)
    const form = new FormData();
    form.append('preferencia', data);
    this.apiService.preferencia(form).subscribe({
      next: (res)=> {
        console.log(res)
        if (res.response === 'Success') window.location.reload()
      }, error: (err)=> {
        console.log(err)
      }
    })
  }
}
