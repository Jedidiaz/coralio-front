import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bar-a',
  templateUrl: './bar-a.component.html',
  styleUrls: ['./bar-a.component.scss']
})
export class BarAComponent implements OnInit{
  @Output() messageEvent = new EventEmitter<any>();

  terapeutas: boolean = true;
  pacientes: boolean = false;
  terapias: boolean = false;
  blogs: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  goInicio() {
    this.terapeutas = true;
    this.pacientes = false;
    this.terapias = false;
    this.blogs = false;
    this.messageEvent.emit({
      terapeutas: true,
      pacientes: false,
      terapias: false,
      blogs: false
    });
  }

  goPacientes() {
    this.terapeutas = false;
    this.pacientes = true;
    this.terapias = false;
    this.blogs = false;
    this.messageEvent.emit({
      terapeutas: false,
      pacientes: true,
      terapias: false,
      blogs: false
    });
  }

  goDocumentos() {
    this.terapeutas = false;
    this.pacientes = false;
    this.terapias = true;
    this.blogs = false;
    this.messageEvent.emit({
      terapeutas: false,
      pacientes: false,
      terapias: true,
      blogs: false
    });
  }

  goBlogs() {
    this.terapeutas = false;
    this.pacientes = false;
    this.terapias = false;
    this.blogs = true;
    this.messageEvent.emit({
      terapeutas: false,
      pacientes: false,
      terapias: false,
      blogs: true
    });
  }

  esconder() {
    (<HTMLFormElement>document.querySelector('.bar')).style.left = '-100%';
  }
}
