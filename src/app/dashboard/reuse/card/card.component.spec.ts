import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports:[
        MaterialModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title',()=>{
    component.title = 'new card'
    fixture.detectChanges()
    let de = fixture.debugElement.query(By.css('.details-card-style h3'))
   let el: HTMLElement = de.nativeElement
   expect(el.innerText).toContain('new card')
  })
  it('should render binded style value',()=>{
    component.value = 'width: 50%'
    fixture.detectChanges()
    let de = fixture.debugElement.query(By.css('.progress > div'))
   let el = de.attributes
   expect(el.style).toContain('width: 50%')
  })
});
