import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.scss']
})
export class MainAdminComponent implements OnInit {

  recive: any = {
    terapeutas: true,
    pacientes: false,
    terapias: false,
  };

  constructor(){}

  ngOnInit(): void {

  }

  receiveMessage($event: any) {
    this.recive = $event;
  }
}