import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NocodeapiCrudService } from 'src/app/dashboard/services/nocodeapi/nocodeapi-crud.service';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent implements OnInit {
  noerror: any;
  errorlogin: any;
  success:any
  title:any
  constructor(
    private nocrudapi: NocodeapiCrudService,
    private router: Router,

    private titleService: Title ,


    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}
  @ViewChild('signin') formvalue: any;
  signedin:any
  signinForm:FormGroup | any;
  ngOnInit(): void {

this.title = this.titleService.setTitle('SignIn page');


    this.signedin = localStorage.getItem('login')
    if(this.signedin !== null){
      const datasign = JSON.parse(this.signedin)
      this.nocrudapi.isAuth === true
      this.router.navigate(['/dashboard'],{state:datasign})

    }
    else{
      this.nocrudapi.isAuth === false
    }
    this.signinForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null , [Validators.required])
    })
  }
  Signin() {
    console.log(this.signinForm.value.email);
    console.log('hii',this.signinForm.value.password);
    this.nocrudapi
      .login(this.signinForm.value.email, this.signinForm.value.password)
      .subscribe((data) => {
        if (data.message) {
          this.errorlogin = data.message;
        } else {
          localStorage.setItem('login', JSON.stringify(data))
         let snackBarRef=  this.snackbar.open('Login Success', 'Dismiss',{
            horizontalPosition:'center',
            verticalPosition:'top',
            direction:'ltr',

          })
          snackBarRef.afterDismissed().subscribe(()=>{
            console.log(data)
            this.router.navigate(['/dashboard'],{state : data });
          })
         // this.router.navigate(['/dashboard'],{state : data });
        }
      }, (error)=>{
        this.errorlogin = error.statusText
        console.log(error)
      });

  }

  resetForm(){
    this.signinForm.reset()
  }
}
