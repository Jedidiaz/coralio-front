import { BarTComponent } from './../../../shared/bar-t/bar-t.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-terapeuta',
  templateUrl: './main-terapeuta.component.html',
  styleUrls: ['./main-terapeuta.component.scss'],
})
export class MainTerapeutaComponent implements OnInit {
  recive: any = {
    inicio: true,
    pacientes: false,
    documentos: false,
    tareas: false,
    sesiones: false,
  };
  constructor() {}

  ngOnInit(): void {}

  receiveMessage($event: any) {
    this.recive = $event;
  }
}
