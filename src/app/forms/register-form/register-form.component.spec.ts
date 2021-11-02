import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NocodeapiCrudService } from 'src/app/dashboard/services/nocodeapi/nocodeapi-crud.service';
import { MaterialModule } from 'src/app/material/material.module';

import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let service: NocodeapiCrudService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormComponent ],
      imports: [
        HttpClientModule, 
        MaterialModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
        FormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
    service=TestBed.inject(NocodeapiCrudService)
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
  it('should enabled the button if form becomes valid',()=>{
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
});
