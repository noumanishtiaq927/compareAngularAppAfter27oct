import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NocodeapiCrudService } from 'src/app/dashboard/services/nocodeapi/nocodeapi-crud.service';
import { MaterialModule } from 'src/app/material/material.module';

import { SignInFormComponent } from './sign-in-form.component';

describe('SignInFormComponent', () => {
  let component: SignInFormComponent;
  let fixture: ComponentFixture<SignInFormComponent>;
  let service:NocodeapiCrudService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInFormComponent ],
      imports:[
        HttpClientModule,
        FormsModule,
        MaterialModule, 
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
    service=TestBed.inject(NocodeapiCrudService)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check the form is valid or not',()=>{
    fixture = TestBed.createComponent(SignInFormComponent)
    component = fixture.componentInstance
  
    fixture.detectChanges()
   
    expect(component.signinForm.valid).toBeFalse()
    

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
    component.signinForm.get('email').setValue('nouman@gmail.com')
    component.signinForm.get('password').setValue('nouman@gmail.com')
    fixture.detectChanges()
    expect(component.signinForm.valid).toBeTrue()
    let buttonsubmit = fixture.debugElement.query(By.css('button[type=submit]'))
    expect(buttonsubmit.properties.disabled).toBeFalse()

  })
});
