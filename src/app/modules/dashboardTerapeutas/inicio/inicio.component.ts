import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  value!: Date;
  constructor() {}

  ngOnInit(): void {
    var fecha = new Date(); //Fecha actual
    var mes: any = fecha.getMonth() + 1; //obteniendo mes
    var dia: any = fecha.getDate(); //obteniendo dia
    var año = fecha.getFullYear(); //obteniendo año
    if (dia < 10) dia = '0' + dia; //agrega cero si el menor de 10
    if (mes < 10) mes = '0' + mes; //agrega cero si el menor de 10
    let today = new Date();
  }

  click($event: any){
    console.log($event)
  }
}
