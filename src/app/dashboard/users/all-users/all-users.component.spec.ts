import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { NocodeapiCrudService } from '../../services/nocodeapi/nocodeapi-crud.service';

import { AllUsersComponent } from './all-users.component';

describe('AllUsersComponent', () => {
  let component: AllUsersComponent;
  let fixture: ComponentFixture<AllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUsersComponent ],
      imports:[HttpClientModule, RouterTestingModule.withRoutes([]) , MaterialModule, FormsModule],

      providers:[HttpClient]

    })
    .compileComponents();
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
