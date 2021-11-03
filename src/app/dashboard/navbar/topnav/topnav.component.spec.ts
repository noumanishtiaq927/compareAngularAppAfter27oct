import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';

import { TopnavComponent } from './topnav.component';

describe('TopnavComponent', () => {
  let component: TopnavComponent;
  let fixture: ComponentFixture<TopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopnavComponent ],
      imports:[
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
        MaterialModule,
        FormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call logout function ', () => {
    spyOn(component,'logoutuser').and.callThrough()
    
    let de = fixture.debugElement.query(By.css('img'))
  
    de.triggerEventHandler('click',null)
    fixture.detectChanges()
     let dew = fixture.debugElement.query(By.css('.logout'))
     
     dew.triggerEventHandler('click',null)
    
     expect(component.logoutuser).toHaveBeenCalledTimes(1)


  });
});
