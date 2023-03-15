import { ApiService } from './../../../services/api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ver-terapeuta',
  templateUrl: './ver-terapeuta.component.html',
  styleUrls: ['./ver-terapeuta.component.scss']
})
export class VerTerapeutaComponent  implements OnInit {
  @Input() id = ''
  terapeuta:any = ''

  constructor ( private apiService: ApiService){}
  ngOnInit(): void {
    this.getTerapeuta()
    console.log(this.id)
  }

  getTerapeuta(){
    this.apiService.getOneTerapeuta(this.id).subscribe({
      next: (res)=> {
        if (res.response === "Success"){
          this.terapeuta = res.datainfo
          console.log(res)
        }
      },error: (err)=> {
        console.log(err)
      }
    })
  }
}
