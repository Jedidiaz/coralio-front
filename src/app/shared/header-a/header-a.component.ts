import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-a',
  templateUrl: './header-a.component.html',
  styleUrls: ['./header-a.component.scss'],
})
export class HeaderAComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  abrirMenu() {
    (<HTMLFormElement>document.querySelector('.bar')).style.left = '0';
  }

  salir(){
    localStorage.removeItem('token')
    window.location.href = "/login"
  }
}
