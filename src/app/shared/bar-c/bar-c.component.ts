import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bar-c',
  templateUrl: './bar-c.component.html',
  styleUrls: ['./bar-c.component.scss']
})
export class BarCComponent {
  @Output() messageEvent = new EventEmitter<any>();

  inicio: boolean = true;
  terapeutas: boolean = false;
  documentos: boolean = false;
  tareas: boolean = false;
  sesiones: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  goInicio() {
    this.inicio = true;
    this.terapeutas = false;
    this.documentos = false;
    this.tareas = false;
    this.sesiones = false;
    this.messageEvent.emit({
      inicio: true,
      pacientes: false,
      documentos: false,
      tareas: false,
      sesiones: false,
    });
  }

  goPacientes() {
    this.inicio = false;
    this.terapeutas = true;
    this.documentos = false;
    this.tareas = false;
    this.sesiones = false;
    this.messageEvent.emit({
      inicio: false,
      pacientes: true,
      documentos: false,
      tareas: false,
      sesiones: false,
    });
  }

  goDocumentos() {
    this.inicio = false;
    this.terapeutas = false;
    this.documentos = true;
    this.tareas = false;
    this.sesiones = false;
    this.messageEvent.emit({
      inicio: false,
      pacientes: false,
      documentos: true,
      tareas: false,
      sesiones: false,
    });
  }

  goTareas() {
    this.inicio = false;
    this.terapeutas = false;
    this.documentos = false;
    this.tareas = true;
    this.sesiones = false;
    this.messageEvent.emit({
      inicio: false,
      pacientes: false,
      documentos: false,
      tareas: true,
      sesiones: false,
    });
  }

  goSesiones() {
    this.inicio = false;
    this.terapeutas = false;
    this.documentos = false;
    this.tareas = false;
    this.sesiones = true;
    this.messageEvent.emit({
      inicio: false,
      pacientes: false,
      documentos: false,
      tareas: false,
      sesiones: true,
    });
  }

  esconder() {
    (<HTMLFormElement>document.querySelector('.bar')).style.left = '-100%';
  }
}
