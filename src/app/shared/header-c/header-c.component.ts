import { ApiService } from './../../services/api.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-c',
  templateUrl: './header-c.component.html',
  styleUrls: ['./header-c.component.scss']
})
export class HeaderCComponent {
  @Output() messageEvent = new EventEmitter<any>();

  inicio: boolean = true;
  terapeutas: boolean = false;
  documentos: boolean = false;
  tareas: boolean = false;
  sesiones: boolean = false;
  nombre: any = 'Nombre'

  constructor( private apiService: ApiService) {}

  ngOnInit(): void {
    this.dataUser()
  }

  dataUser(){
    this.apiService.getUserLogged().subscribe({
      next: (res)=> {
        if(res.response === 'Success') this.nombre = res.user.nombre
      }, error: (err)=> {
        console.log(err)
      }
    })
  }

  salir(){
    localStorage.removeItem('token')
    window.location.href = "/login"
  }

  goInicio() {
    this.inicio = true;
    this.terapeutas = false;
    this.documentos = false;
    this.tareas = false;
    this.sesiones = false;
    this.messageEvent.emit({
      inicio: true,
      terapeutas: false,
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
      terapeutas: true,
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
      terapeutas: false,
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
      terapeutas: false,
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
      terapeutas: false,
      documentos: false,
      tareas: false,
      sesiones: true,
    });
  }
  abrirMenu() {
    (<HTMLFormElement>document.querySelector('.bar')).style.left = '0';
  }
}
