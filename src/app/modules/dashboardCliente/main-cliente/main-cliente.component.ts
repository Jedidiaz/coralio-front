import { ApiService } from './../../../services/api.service';
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
  first: boolean = false
  constructor( private apiService: ApiService ) {}

  ngOnInit(): void {
    this.dataUser()
    if(!localStorage.getItem('token')) window.location.href = '/'
  }

  receiveMessage($event: any) {
    this.recive = $event;
  }

  dataUser(){
    this.apiService.getUserLogged().subscribe({
      next: (res)=> {
        console.log(res)
        if(res.user.preferencia.length === 0)this.first = true
        else this.first = false
      }, error: (err)=> {
        console.log(err)
      }
    })
  }

}
