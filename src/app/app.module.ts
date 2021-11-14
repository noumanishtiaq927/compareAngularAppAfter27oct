import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { SignInFormComponent } from './forms/sign-in-form/sign-in-form.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { ClickdirectiveDirective } from './directives/event-directives/clickdirective.directive';
import { TypeChangeInputDirective } from './directives/attribute-directive/type-change-input.directive';
import { MomentDatesPipe } from './pipes/dates/moment-dates.pipe';
import { MomentTimePipe } from './pipes/times/moment-time.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SignInFormComponent,    
    RegisterFormComponent, 
    ClickdirectiveDirective, 
    TypeChangeInputDirective,  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
