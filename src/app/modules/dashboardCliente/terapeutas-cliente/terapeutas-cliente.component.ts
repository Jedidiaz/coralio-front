import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terapeutas-cliente',
  templateUrl: './terapeutas-cliente.component.html',
  styleUrls: ['./terapeutas-cliente.component.scss']
})
export class TerapeutasClienteComponent implements OnInit {
  constructor (){}

  ngOnInit(): void {

  }

  drop(){
    document.getElementById('drop1')!.style.transform = 'rotate(180deg)'
  }
}
