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
  cinco: boolean = false;
  seis: boolean = false;
  siete: boolean = false;
  ocho: boolean = false;
  nueve: boolean = false;
  dies: boolean = false;
  once: boolean = false;
  doce: boolean = false;

  nombre: any = 'Nombre';
  preferencias: any = {terapia: [], genero: '', sesion: '', horario: []}

  constructor(
    private formbuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.formPrefer = formbuilder.group({
      especialidad: ['', Validators.required],
      genero: ['', Validators.required],
      edad: ['', Validators.required],
      precio: ['', Validators.required],
      hora: ['', Validators.required],
      sesion: ['', Validators.required],
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
    this.cinco = false;
    this.seis = false;
    this.siete = false;
    this.ocho = false;
    this.nueve = false;
    this.dies = false;
    this.once = false;
    this.doce = false;
  }

  next1(target: any) {
    this.uno = false;
    this.dos = false;
    this.tres = true;
    this.cuatro = false;
    this.cinco = false;
    this.seis = false;
    this.siete = false;
    this.ocho = false;
    this.nueve = false;
    this.dies = false;
    this.once = false;
    this.doce = false;
    this.preferencias.sesion = target
  }

  next2(target: any) {
    this.uno = false;
    this.dos = false;
    this.tres = false;
    this.cuatro = true;
    this.cinco = false;
    this.seis = false;
    this.siete = false;
    this.ocho = false;
    this.nueve = false;
    this.dies = false;
    this.once = false;
    this.doce = false;
  }

  next3(target: any) {
    this.uno = false;
    this.dos = false;
    this.tres = false;
    this.cuatro = false;
    this.cinco = true;
    this.seis = false;
    this.siete = false;
    this.ocho = false;
    this.nueve = false;
    this.dies = false;
    this.once = false;
    this.doce = false;
    this.preferencias.genero = target
  }

  next4(target: any) {
    this.uno = false;
    this.dos = false;
    this.tres = false;
    this.cuatro = false;
    this.cinco = false;
    this.seis = true;
    this.siete = false;
    this.ocho = false;
    this.nueve = false;
    this.dies = false;
    this.once = false;
    this.doce = false;
    this.preferencias.horario = target
  }

  next5() {
    this.uno = false;
    this.dos = false;
    this.tres = false;
    this.cuatro = false;
    this.cinco = false;
    this.seis = false;
    this.siete = true;
    this.ocho = false;
    this.nueve = false;
    this.dies = false;
    this.once = false;
    this.doce = false;
    // this.preferencias.genero = target
  }

  next6() {
    this.uno = false;
    this.dos = false;
    this.tres = false;
    this.cuatro = false;
    this.cinco = false;
    this.seis = false;
    this.siete = false;
    this.ocho = true;
    this.nueve = false;
    this.dies = false;
    this.once = false;
    this.doce = false;
    // this.preferencias.genero = target
  }

  next7() {
    this.uno = false;
    this.dos = false;
    this.tres = false;
    this.cuatro = false;
    this.cinco = false;
    this.seis = false;
    this.siete = false;
    this.ocho = false;
    this.nueve = true;
    this.dies = false;
    this.once = false;
    this.doce = false;
    // this.preferencias.genero = target
  }

  next8() {
    this.uno = false;
    this.dos = false;
    this.tres = false;
    this.cuatro = false;
    this.cinco = false;
    this.seis = false;
    this.siete = false;
    this.ocho = false;
    this.nueve = false;
    this.dies = true;
    this.once = false;
    this.doce = false;
    // this.preferencias.genero = target
  }

  next9() {
    this.uno = false;
    this.dos = false;
    this.tres = false;
    this.cuatro = false;
    this.cinco = false;
    this.seis = false;
    this.siete = false;
    this.ocho = false;
    this.nueve = false;
    this.dies = false;
    this.once = true;
    this.doce = false;
    // this.preferencias.genero = target
  }

  next10() {
    this.uno = false;
    this.dos = false;
    this.tres = false;
    this.cuatro = false;
    this.cinco = false;
    this.seis = false;
    this.siete = false;
    this.ocho = false;
    this.nueve = false;
    this.dies = false;
    this.once = false;
    this.doce = true;
    // this.preferencias.genero = target
  }

  prefer() {
    const data = `${this.formPrefer.value.edad},${this.formPrefer.value.genero},${this.formPrefer.value.precio},${this.formPrefer.value.especialidad}`;
    console.log(data)
    this.apiService.preferencia(this.preferencias).subscribe({
      next: (res)=> {
        console.log(res)
        if (res.response === 'Success') window.location.reload()
      }, error: (err)=> {
        console.log(err)
      }
    })
  }

  especial(target: any){
    this.preferencias.terapia.push(target.value)
    console.log(this.preferencias.terapia)
  }
}
