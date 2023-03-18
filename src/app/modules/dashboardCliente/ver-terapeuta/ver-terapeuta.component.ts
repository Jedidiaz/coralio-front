import { ApiService } from './../../../services/api.service';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

declare var paypal:any ;

@Component({
  selector: 'app-ver-terapeuta',
  templateUrl: './ver-terapeuta.component.html',
  styleUrls: ['./ver-terapeuta.component.scss']
})
export class VerTerapeutaComponent  implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;
  @Input() id = ''
  terapeuta:any = ''

  constructor ( private apiService: ApiService){}
  ngOnInit(): void {
    this.getTerapeuta()
    console.log(this.id)

    //paypal Payment
    paypal
      .Buttons({
        style: {
          shape: 'pill',
          color: 'gold',
          layout: 'horizontal',
          label: 'paypal',
        }
      })
      .render(this.paypalElement.nativeElement);
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
