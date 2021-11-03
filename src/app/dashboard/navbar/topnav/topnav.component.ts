import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NocodeapiCrudService } from '../../services/nocodeapi/nocodeapi-crud.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css'],
})
export class TopnavComponent implements OnInit {
  leng = '1';
  @Input() valu:any
 
  @Input() profilePic:any
  @Output() sidenav: EventEmitter<any> = new EventEmitter();

  toggle() {
   this.sidenav.emit();
   }
  showexpand = true;
  constructor( private nocrudapi: NocodeapiCrudService) {}

  ngOnInit(): void {}
  logoutuser(){
    console.log('logout')
    localStorage.removeItem('login')
    // window.location.reload()
  }
}
