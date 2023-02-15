import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bar-t',
  templateUrl: './bar-t.component.html',
  styleUrls: ['./bar-t.component.scss'],
})
export class BarTComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();

  inicio: boolean = true;
  pacientes: boolean = false;
  documentos: boolean = false;
  tareas: boolean = false;
  sesiones: boolean = false;
  perfil: boolean = false

  constructor() {}

  ngOnInit(): void {}

  goInicio() {
    this.inicio = true;
    this.pacientes = false;
    this.documentos = false;
    this.tareas = false;
    this.sesiones = false;
    this.perfil = false
    this.messageEvent.emit({
      inicio: true,
      pacientes: false,
      documentos: false,
      tareas: false,
      sesiones: false,
      perfil: false
    });
  }

  goPacientes() {
    this.inicio = false;
    this.pacientes = true;
    this.documentos = false;
    this.tareas = false;
    this.sesiones = false;
    this.perfil = false
    this.messageEvent.emit({
      inicio: false,
      pacientes: true,
      documentos: false,
      tareas: false,
      sesiones: false,
      perfil: false

    });
  }

  goDocumentos() {
    this.inicio = false;
    this.pacientes = false;
    this.documentos = true;
    this.tareas = false;
    this.sesiones = false;
    this.perfil = false
    this.messageEvent.emit({
      inicio: false,
      pacientes: false,
      documentos: true,
      tareas: false,
      sesiones: false,
      perfil: false

    });
  }

  goTareas() {
    this.inicio = false;
    this.pacientes = false;
    this.documentos = false;
    this.tareas = true;
    this.sesiones = false;
    this.perfil = false
    this.messageEvent.emit({
      inicio: false,
      pacientes: false,
      documentos: false,
      tareas: true,
      sesiones: false,
      perfil: false

    });
  }

  goSesiones() {
    this.inicio = false;
    this.pacientes = false;
    this.documentos = false;
    this.tareas = false;
    this.sesiones = true;
    this.perfil = false
    this.messageEvent.emit({
      inicio: false,
      pacientes: false,
      documentos: false,
      tareas: false,
      sesiones: true,
      perfil: false
    });
  }

  goPerfil(){
    this.inicio = false;
    this.pacientes = false;
    this.documentos = false;
    this.tareas = false;
    this.sesiones = false;
    this.perfil = true
    this.messageEvent.emit({
      inicio: false,
      pacientes: false,
      documentos: false,
      tareas: false,
      sesiones: false,
      perfil: true
    });
  }

  esconder() {
    (<HTMLFormElement>document.querySelector('.bar')).style.left = '-100%';
  }
}
