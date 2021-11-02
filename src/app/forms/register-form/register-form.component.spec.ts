import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/dashboard/main/home/home.component';
import { MaterialModule } from 'src/app/material/material.module';

import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
let titleservice: Title
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormComponent ],
      imports:[
        HttpClientModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
        MaterialModule,
        BrowserAnimationsModule ,
        ReactiveFormsModule]
    })
    .compileComponents();
titleservice = TestBed.inject(Title)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check the form is invalid',()=>{
    expect(component.registerForm.invalid).toBeTrue()
  })


  it('should check the button is disabled if form is invalid',()=>{
    expect(component.registerForm.invalid).toBeTrue()
    let submitbutton = fixture.debugElement.query(By.css('button[type=submit]'))
    expect(submitbutton.properties.disabled).toBeTrue()
  })

  it(`should have as title 'Register page'`, () => {

    expect(titleservice.getTitle()).toEqual('Register page');
    })

// it('should check onsubmit method called  ', ()=>{
//   spyOn(component , 'onSubmit').and.callThrough()
// expect(component.registerForm.value).toBeTrue()
//   let formm = fixture.debugElement.query(By.css('form'))
//   formm.triggerEventHandler('ngSubmit',null)
//   expect(component.onSubmit).toHaveBeenCalledTimes(1)
//   expect(component.registerForm.valid).toBeTrue()


// })
it('should reset the registerform fields by calling resetForm Function' ,()=>{
  spyOn(component,'resetForm').and.callThrough()
  component.registerForm.get('email').setValue('nouman')
  fixture.detectChanges()
  expect(component.registerForm.get('email').value).toBe('nouman')
  let  resetbutton = fixture.debugElement.query(By.css('.register-form-reset'))
  resetbutton.triggerEventHandler('click',null)
  fixture.detectChanges()
  expect(component.resetForm).toHaveBeenCalledTimes(1)
  fixture.detectChanges()
  expect(component.registerForm.get('email').value).toBe(null)

})

  it('should enabled the button if form becomes valid',()=>{
    spyOn(component , 'onSubmit').and.callThrough()
      component.registerForm.get('email').setValue('noumanishtiaq@gmail.com')
      component.registerForm.get('firstName').setValue('nouman')
      component.registerForm.get('lastName').setValue('ishtiaq')
      component.registerForm.get('gender').setValue('male')
      component.registerForm.get('mobile').setValue('12222')
      component.registerForm.get('address').setValue('rawalpindi')
      component.registerForm.get('department').setValue('sales')
      component.registerForm.get('designation').setValue('coo')
      component.registerForm.get('dateOfJoining').setValue(new Date())
      component.registerForm.get('confirmpassword').setValue('nouman')
      component.registerForm.get('password').setValue('nouman')
    fixture.detectChanges()
      expect(component.registerForm.get('email').valid).toBeTrue()
      expect(component.registerForm.get('firstName').valid).toBeTrue()
      expect(component.registerForm.get('lastName').valid).toBeTrue()
      expect(component.registerForm.get('address').valid).toBeTrue()
      expect(component.registerForm.get('gender').valid).toBeTrue()
      expect(component.registerForm.get('designation').valid).toBeTrue()
      expect(component.registerForm.get('department').valid).toBeTrue()
      expect(component.registerForm.get('mobile').valid).toBeTrue()
      expect(component.registerForm.get('password').valid).toBeTrue()
      expect(component.registerForm.get('confirmpassword').valid).toBeTrue()
      expect(component.registerForm.get('dateOfJoining').valid).toBeTrue()
      expect(component.registerForm.valid).toBeTrue()
      let submitbutton = fixture.debugElement.query(By.css('button[type=submit]'))
      expect(submitbutton.properties.disabled).toBeFalse()

  })

  it('should check whether the tweleve fields are present in register form',()=>{
    const fields = fixture.debugElement.queryAll(By.css('#registerform mat-form-field'))
    expect(fields.length).toBe(12)
  })

});
