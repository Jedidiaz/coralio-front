import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  tearpeuta:string = 'cliente'
  select: boolean = false

  constructor(){

  }

  ngOnInit(): void {

  }

  selected(){
    this.select = true
    document.getElementById('options')!.style.display = 'none'
  }
}
