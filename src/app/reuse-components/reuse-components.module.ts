import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from '../forms/register-form/register-form.component';
import { AllUsersComponent } from '../dashboard/users/all-users/all-users.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from '../dashboard/navbar/sidenav/sidenav.component';
import { TopnavComponent } from '../dashboard/navbar/topnav/topnav.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';



@NgModule({
  declarations: [

    AllUsersComponent,
    SidenavComponent,
    TopnavComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[

    AllUsersComponent,
    SidenavComponent,
    TopnavComponent,
    DashboardComponent
  ]
})
export class ReuseComponentsModule { }
