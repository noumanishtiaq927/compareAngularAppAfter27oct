import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material/material.module';

import { NocodeapiCrudService } from './nocodeapi-crud.service';

describe('NocodeapiCrudService', () => {
  let service: NocodeapiCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule
      ]
    });
    service = TestBed.inject(NocodeapiCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
