import { Component } from '@angular/core';

@Component({
  selector: 'app-main-cliente',
  templateUrl: './main-cliente.component.html',
  styleUrls: ['./main-cliente.component.scss']
})
export class MainClienteComponent {
  recive: any = {
    inicio: true,
    terapeutas: false,
    documentos: false,
    tareas: false,
    sesiones: false,
  };
  constructor() {}

  ngOnInit(): void {
    if(!localStorage.getItem('token')) window.location.href = '/'
  }

  receiveMessage($event: any) {
    this.recive = $event;
  }
}
