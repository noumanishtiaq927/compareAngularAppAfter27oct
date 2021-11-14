import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AllUsersComponent } from './users/all-users/all-users.component';

import { MaterialModule } from '../material/material.module';
import { NocodeapiCrudService } from './services/nocodeapi/nocodeapi-crud.service';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './navbar/sidenav/sidenav.component';
import { TopnavComponent } from './navbar/topnav/topnav.component';
import { CardComponent } from './reuse/card/card.component';
import { HomeComponent } from './main/home/home.component';
import { GraphcardComponent } from './reuse/graphcard/graphcard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from '../services/auth/auth-guard.service';
import { ReuseComponentsModule } from '../reuse-components/reuse-components.module';
import { ReverseStringPipe } from '../pipes/strings/reverse-string.pipe';
import { MomentTimePipe } from '../pipes/times/moment-time.pipe';
import { MomentDatesPipe } from '../pipes/dates/moment-dates.pipe';


@NgModule({
  declarations: [


ReverseStringPipe,
    CardComponent,
    HomeComponent,
    GraphcardComponent,
    MomentTimePipe,
    MomentDatesPipe,

  ],
  imports: [
    CommonModule,
    ReuseComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [NocodeapiCrudService, AuthGuardService],
})
export class DashboardModule {}
