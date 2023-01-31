import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-t',
  templateUrl: './header-t.component.html',
  styleUrls: ['./header-t.component.scss']
})
export class HeaderTComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {

  }

  abrirMenu(){
    (<HTMLFormElement>document.querySelector('.bar')).style.left = '0';
  }
}
