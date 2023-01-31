import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit{
  pacientes: any [] = [1,2,3]

  constructor(){}

  ngOnInit(): void {

  }
}
