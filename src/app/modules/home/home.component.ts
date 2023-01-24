import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  styles = {
    styleImages: {
      width: '100%'
    }
  }
  constructor() {}
  ngOnInit(): void {}
}
