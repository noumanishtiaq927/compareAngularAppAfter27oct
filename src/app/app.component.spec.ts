import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/main/home/home.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { SignInFormComponent } from './forms/sign-in-form/sign-in-form.component';
import { MaterialModule } from './material/material.module';
import { AuthGuardService } from './services/auth/auth-guard.service';

describe('AppComponent', () => {
  let router:Router;
  let location : Location
  let fixture: ComponentFixture<AppComponent>
  const routes: Routes = [
    {
      path: 'dashboard',
      canActivate: [AuthGuardService],
      loadChildren: () =>
        import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    { path: '', component: SignInFormComponent },
    { path: 'register', component: RegisterFormComponent },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [

        RouterTestingModule.withRoutes(routes),
        HttpClientModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,RegisterFormComponent,SignInFormComponent,DashboardComponent
      ],
      providers: []
    }).compileComponents();
    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    fixture = TestBed.createComponent(AppComponent)
    router.initialNavigation()

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'airtableNocodeapi'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('airtableNocodeapi');
  });

  it('should render content', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.sign-in-form-header')?.textContent).toContain('Signin to Account');
  });
  //checking routing
  it('should go to the register page',fakeAsync(()=>{
      router.navigate(['/register']);
      tick();
      expect(location.path()).toBe('/register')
  }))
  it('should go to the login page',fakeAsync(()=>{
      router.navigate(['/']);
      tick();
      expect(location.path()).toBe('/')
  }))

});
