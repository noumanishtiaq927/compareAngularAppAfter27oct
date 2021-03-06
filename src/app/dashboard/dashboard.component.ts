import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  logo = 'HYCUBE';
  name = 'Nouman Ishtiaq';
  designation = 'Junior Developer';
  user: any = {};
  @ViewChild('drawer') drawer: any;
  constructor(private titleService: Title) {}

  toggle() {
    // console.log(this.drawer);
    this.drawer?.toggle();
  }
  ngOnInit(): void {
    this.titleService.setTitle('Dashboard page');

    const users = localStorage.getItem('login');
    if (users !== null) {
      // console.log(users);
      this.user = JSON.parse(users);
      // console.log(this.user);
    } else {
      // console.log(history.state);
      this.user = history.state;
    }
  }
}
