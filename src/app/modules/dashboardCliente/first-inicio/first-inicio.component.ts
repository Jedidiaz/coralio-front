import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-inicio',
  templateUrl: './first-inicio.component.html',
  styleUrls: ['./first-inicio.component.scss']
})
export class FirstInicioComponent implements OnInit {

  formPrefer: FormGroup
  uno: boolean = true
  dos: boolean = false
  tres: boolean = false
  cuatro: boolean = false
  constructor ( private formbuilder: FormBuilder ){
    this.formPrefer = formbuilder.group({
      especialidad: ['', Validators.required],
      Genero: ['', Validators.required],
      Edad: ['', Validators.required],
      precio: ['', Validators.required],
    })
  }
  ngOnInit(): void {

  }

  next(){
    this.uno = false
    this.dos = true
    this.tres = false
    this.cuatro = false
  }

  next1(){
    this.uno = false
    this.dos = false
    this.tres = true
    this.cuatro = false
  }

  next2(){
    this.uno = false
    this.dos = false
    this.tres = false
    this.cuatro = true
  }

}
