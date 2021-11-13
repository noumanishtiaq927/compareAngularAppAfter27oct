import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ReuseComponentsModule } from '../reuse-components/reuse-components.module';
import { AllUsersComponent } from '../dashboard/users/all-users/all-users.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TopnavComponent } from '../dashboard/navbar/topnav/topnav.component';
import { SidenavComponent } from '../dashboard/navbar/sidenav/sidenav.component';



@NgModule({
  declarations: [
    UsersComponent,






  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReuseComponentsModule
,    MaterialModule
 ]
})
export class UsersModule { }
