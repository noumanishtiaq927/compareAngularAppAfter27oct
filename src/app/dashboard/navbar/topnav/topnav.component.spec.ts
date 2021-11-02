import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { NocodeapiCrudService } from '../../services/nocodeapi/nocodeapi-crud.service';

import { TopnavComponent } from './topnav.component';

describe('TopnavComponent', () => {
  let component: TopnavComponent;
  let fixture: ComponentFixture<TopnavComponent>;
  let service: NocodeapiCrudService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopnavComponent],
      imports:[
         BrowserAnimationsModule,BrowserAnimationsModule ,HttpClientModule, RouterTestingModule,
         MaterialModule
      ]
    })
    .compileComponents();
    service = TestBed.inject(NocodeapiCrudService)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
