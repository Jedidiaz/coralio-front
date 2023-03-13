import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-terapeuta',
  templateUrl: './ver-terapeuta.component.html',
  styleUrls: ['./ver-terapeuta.component.scss']
})
export class VerTerapeutaComponent  implements OnInit {

  constructor ( private apiService: ApiService){}
  ngOnInit(): void {
    this.getTerapeuta()
  }

  getTerapeuta(){
    const id =  '63e13f4ac29d00e650667bcf'
    this.apiService.getOneTerapeuta(id).subscribe({
      next: (res)=> {
        console.log(res)
      }
    })
  }
}
