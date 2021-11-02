import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NocodeapiCrudService } from 'src/app/dashboard/services/nocodeapi/nocodeapi-crud.service';
import { MaterialModule } from 'src/app/material/material.module';

import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;
  let service2: NocodeapiCrudService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule.withRoutes([]), FormsModule, MaterialModule]
    });
    service = TestBed.inject(AuthGuardService);
    service2 = TestBed.inject(NocodeapiCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
