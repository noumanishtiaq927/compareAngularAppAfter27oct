import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  text = '';
  data = [
    {
      title: 'total users',
      number: new Date(),
      value: "width: 75%",
      colors: 'purpleCard',
      iconname: 'face',
      color:"bg-secondary"
    },
    {
      title: 'total rooms',
      number: 1236874318033,
      value: "width: 55%",
      colors: 'orangeCard',
      iconname: 'hotel',
      color:"bg-warning"
    },
    {
      title: 'total departments',
      number: 1636824927373,
      value: "width: 40%",
      colors: 'greenCard',
      iconname: 'home',
      color:"bg-success"
    },
    {
      title: 'total designation',
      number: 1901111743180,
      value: "width: 80%",
      colors: 'blueCard',
      iconname: 'person',
      color:"bg-info"
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
