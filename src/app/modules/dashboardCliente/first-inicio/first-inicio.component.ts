import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-inicio',
  templateUrl: './first-inicio.component.html',
  styleUrls: ['./first-inicio.component.scss']
})
export class FirstInicioComponent implements OnInit {

  formPrefer: FormGroup
  constructor ( private formbuilder: FormBuilder ){
    this.formPrefer = formbuilder.group({
      especialidad: ['', Validators.required],
      Genero: ['', Validators.required],
      Edad: ['', Validators.required],
      equis: ['', Validators.required],
    })
  }
  ngOnInit(): void {

  }
}
