import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material/material.module';

import { GraphcardComponent } from './graphcard.component';

describe('GraphcardComponent', () => {
  let component: GraphcardComponent;
  let fixture: ComponentFixture<GraphcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphcardComponent ],
      imports:[
        MaterialModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
