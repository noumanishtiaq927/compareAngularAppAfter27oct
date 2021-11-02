import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { NocodeapiCrudService } from '../../services/nocodeapi/nocodeapi-crud.service';

import { AllUsersComponent } from './all-users.component';

describe('AllUsersComponent', () => {
  let component: AllUsersComponent;
  let fixture: ComponentFixture<AllUsersComponent>;
  let service: NocodeapiCrudService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUsersComponent ],
      imports:[
        MaterialModule, 
        HttpClientModule, 
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule]
    })
    .compileComponents();
    service = TestBed.inject(NocodeapiCrudService)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
