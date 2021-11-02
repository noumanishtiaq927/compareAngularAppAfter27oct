import { Location } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { By,Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NocodeapiCrudService } from 'src/app/dashboard/services/nocodeapi/nocodeapi-crud.service';
import { MaterialModule } from 'src/app/material/material.module';
import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';
import { RegisterFormComponent } from '../register-form/register-form.component';

import { SignInFormComponent } from './sign-in-form.component';


describe('SignInFormComponent', () => {
  let component: SignInFormComponent;
  let fixture: ComponentFixture<SignInFormComponent>;
  let service: MatDialog
  let router:Router;
  let location : Location
  let titleservice: Title
  let Noservice: NocodeapiCrudService
  let httpTestingController: HttpTestingController

  const routes: Routes = [

    { path: '', component: SignInFormComponent },
    { path: 'register', component: RegisterFormComponent },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInFormComponent ],
      imports:[
        FormsModule,
        HttpClientModule,
        RouterTestingModule.withRoutes(routes),
        MaterialModule,
        BrowserAnimationsModule ,
        ReactiveFormsModule,
        HttpClientTestingModule


      ],
      providers:[NocodeapiCrudService, HttpClient]
    })
    .compileComponents();
    titleservice = TestBed.inject(Title)
    Noservice = TestBed.inject(NocodeapiCrudService)
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('should check whether the two fields are present or not',()=>{
  const fields = fixture.debugElement.queryAll(By.css('#signinform mat-form-field'))
  expect(fields.length).toBe(2)
})

it(`should have as title 'SignIn page'`, () => {

expect(titleservice.getTitle()).toEqual('SignIn page');
})

it('should check the form is valid or not',()=>{
  fixture = TestBed.createComponent(SignInFormComponent)
  component = fixture.componentInstance
  fixture.detectChanges()
  expect(component.signinForm.valid).toBeFalse()
})

it('should reset the signinform fields by calling resetForm Function' ,()=>{
  spyOn(component,'resetForm').and.callThrough()
  component.signinForm.get('email').setValue('nouman')
  fixture.detectChanges()
  expect(component.signinForm.get('email').value).toBe('nouman')
  let  resetbutton = fixture.debugElement.query(By.css('.sign-in-form-clear'))
  resetbutton.triggerEventHandler('click',null)
  fixture.detectChanges()
  expect(component.resetForm).toHaveBeenCalledTimes(1)
  fixture.detectChanges()
  expect(component.signinForm.get('email').value).toBe(null)

})



it('should check Siginin method called login service method  ', ()=>{
  spyOn(component , 'Signin').and.callThrough()
  spyOn(Noservice , 'login').and.callThrough()
  // spyOnProperty(component,'errorlogin' ,'get').and.returnValue(v)

  component.signinForm.get('email').setValue('nouma@g')
  component.signinForm.get('password').setValue('noumanmail.com')
  fixture.detectChanges()
  let formm = fixture.debugElement.query(By.css('form'))
  formm.triggerEventHandler('ngSubmit',null)
  fixture.detectChanges()
  expect(component.Signin).toHaveBeenCalledTimes(1)
  fixture.detectChanges()
  expect(Noservice.login).toHaveBeenCalledTimes(1)
fixture.detectChanges()
  expect(component.signinForm.value).toBeDefined()
  fixture.detectChanges()
  expect(component.signinForm.valid).toBeTrue()
  fixture.detectChanges()
})
it('should check whether the button is disabled when form is invalid',()=>{
  fixture = TestBed.createComponent(SignInFormComponent)
  component = fixture.componentInstance
  fixture.detectChanges();

  let buttonsubmit = fixture.debugElement.query(By.css('button[type=submit]'))
  expect(buttonsubmit.properties.disabled).toBeTrue()
})


it('should check whether the button becomes enabled when form is valid', ()=>{
  expect(component.signinForm.valid).toBeFalse()
  component.signinForm.get('email').setValue('nouman@gmail')
  component.signinForm.get('password').setValue('noumanmail.com')
  fixture.detectChanges()
  expect(component.signinForm.get('email').valid).toBeTrue()
  let buttonsubmit = fixture.debugElement.query(By.css('button[type=submit]'))
  expect(buttonsubmit.properties.disabled).toBeFalse()
})

// service checking
xit('should check Siginin method called  ',fakeAsync(()=>{
  // spyOn(component , 'Signin').and.callThrough()
  // spyOn(Noservice , 'login').and.callThrough()
  // spyOnProperty(component,'errorlogin' ,'get').and.returnValue(v)

  component.signinForm.get('email').setValue('flash@gmail.com')
  component.signinForm.get('password').setValue('flashisback')
 fixture.detectChanges()
  let formm = fixture.debugElement.query(By.css('form'))
  formm.triggerEventHandler('ngSubmit',null)
  component.Signin()
  fixture.detectChanges()
  tick(100000)
  expect(component.signedin).toBeFalse()

  // fixture.detectChanges()
  // expect(component.Signin).toHaveBeenCalledTimes(1)
  // fixture.detectChanges()
  //expect(Noservice.login).toHaveBeenCalledWith(component.signinForm.get('email').value, component.signinForm.get('password').value)

  // expect(Noservice.login).toHaveBeenCalledTimes(1)

  // expect(component.signinForm.value).toBeTrue()

  // expect(component.signinForm.valid).toBeTrue()

  // let errorlogin = fixture.debugElement.query(By.css('.sign-in-form-error')).nativeElement
  // expect(errorlogin.innerHTML).toBeTrue()
  // expect(component.errorlogin).toBeTrue()

}))

});

