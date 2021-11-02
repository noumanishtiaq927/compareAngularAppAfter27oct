import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { NocodeapiCrudService } from './nocodeapi-crud.service';

describe('NocodeapiCrudService', () => {
  let service: NocodeapiCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(NocodeapiCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
