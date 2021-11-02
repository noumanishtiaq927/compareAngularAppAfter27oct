import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NocodeapiCrudService } from 'src/app/dashboard/services/nocodeapi/nocodeapi-crud.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  serverError: any = null;
  designation: string = '';
  department: string = '';
  gender: string = '';

  minDate: any = new Date();
  datapost = {
    lastName: 'allen',
    gender: 'male',
    mobile: 3461234567,
    password: 'flashisback',
    designation: 'coo',
    department: 'management',
    email: 'flash@gmail.com',
    dateOfJoining: '2021-01-19',
    address: 'central city\n\n',
    firstName: 'barry',
    // profilePic: [
    //   {
    //     url: 'https://dl.airtable.com/.attachments/420222d766f77d7c806adfcd666da7b7/e21c7500/1527078769-the-flash-season-4-finale.jpg',
    //   },
    // ],
  };

  @ViewChild('f') formdata: any;
  @ViewChild('fileuploade') fileuploadvar: ElementRef | undefined;
  errorregister: any;
  firstName: any;
  registerForm: FormGroup | any
  id: any;
  dar: any = {};
  constructor(
    private servicenocode: NocodeapiCrudService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title ,
    private snackbar: MatSnackBar
  ) {
    this.registerForm = new FormGroup({
      'firstName' : new FormControl(null, [Validators.required]),
      'lastName' : new FormControl(null, [Validators.required]),
      'email' : new FormControl(null, [Validators.required]),
      'password' : new FormControl(null, [Validators.required]),
      'confirmpassword' : new FormControl(null, [Validators.required]),
      'profilePic' : new FormControl(null),
      'department' : new FormControl(null, [Validators.required]),
      'designation' : new FormControl(null, [Validators.required]),
      'gender' : new FormControl(null, [Validators.required]),
      'mobile' : new FormControl(null, [Validators.required]),
      'dateOfJoining' : new FormControl(null, [Validators.required]),
      'address' : new FormControl(null, [Validators.required]),
    })
    console.log(typeof this.serverError);
    console.log(this.route);
    let id = this.route.snapshot.params.id;
    this.id = id;
    console.log(id);
    if (id) {
      this.servicenocode.singlegetdata(id).subscribe((data: any) => {
        this.registerForm = new FormGroup({
          'firstName' : new FormControl(data.firstName, [Validators.required]),
          'lastName' : new FormControl(data.lastName, [Validators.required]),
          'email' : new FormControl(data.email, [Validators.required]),
          'password' : new FormControl(data.password, [Validators.required]),
          'confirmpassword' : new FormControl(data.password, [Validators.required]),
          'profilePic' : new FormControl(null),
          'department' : new FormControl(data.department, [Validators.required]),
          'designation' : new FormControl(data.designation, [Validators.required]),
          'gender' : new FormControl(data.gender, [Validators.required]),
          'mobile' : new FormControl(data.mobile, [Validators.required]),
          'dateOfJoining' : new FormControl(data.dateOfJoining, [Validators.required]),
          'address' : new FormControl(data.address, [Validators.required]),
        })
        console.log(data)
        console.log(this.registerForm.value)

      });
    }
  }

  ngOnInit(): void {

this.titleService.setTitle('Register page');



  }
  onSubmit() {
    console.log(this.registerForm.value);
    console.log(this.registerForm.controls.valid)
    this.datapost.firstName = this.registerForm.value.firstName
      .trim()
      .replace(/\s/g, '');
    this.datapost.lastName = this.registerForm.value.lastName
      .trim()
      .replace(/\s/g, '');
    this.datapost.email = this.registerForm.value.email
      .toLowerCase()
      .trim()
      .replace(/\s/g, '');
    this.datapost.password = this.registerForm.value.password;
    this.datapost.department = this.registerForm.value.department;
    this.datapost.designation = this.registerForm.value.designation;
    this.datapost.dateOfJoining;
    typeof this.registerForm.value.dateOfJoining === 'string'
      ? this.registerForm.value.dateOfJoining
      : this.registerForm.value.dateOfJoining.toLocaleDateString();
    this.datapost.gender = this.registerForm.value.gender;
    this.datapost.mobile = this.registerForm.value.mobile;
    this.datapost.address = this.registerForm.value.address;
    // this.datapost.profilePic[0].url = this.formdata.value.profilePic;

    console.log(this.datapost);
    if (typeof this.id !== 'string') {
      this.servicenocode.findData(this.datapost.email, this.datapost).subscribe(
        (data) => {
          console.log(data);
          if (data.message && data) {
            console.log('one')
            this.serverError = data.message;
            let snackBarRef=  this.snackbar.open(this.serverError, 'Dismiss',{
              horizontalPosition:'center',
              verticalPosition:'top',
              direction:'ltr',

            })
          } else {
            console.log('two')
            console.log({data})

            this.servicenocode.error.subscribe((error) => {
              this.serverError = error;
              console.log({error})
            // this.servicenocode.isAuth = true;
            let snackBarRef=  this.snackbar.open(this.serverError, 'Dismiss',{
              horizontalPosition:'center',
              verticalPosition:'top',
              direction:'ltr',

            })
            // snackBarRef.afterDismissed().subscribe(()=>{
            //   console.log(data)
            //   this.router.navigate(['/dashboard'],{state : data });
            // }) //maybe needed .
          });
          let snackBarRef=  this.snackbar.open('Registration Successful', 'Dismiss',{
            horizontalPosition:'center',
            verticalPosition:'top',
            direction:'ltr',

          })
          snackBarRef.afterDismissed().subscribe(()=>{
            console.log(this.formdata)
            this.registerForm.reset();

            // this.router.navigate(['/dashboard'],{state : data });
          })
            // this.router.navigate(['/dashboard']);
          }
        },
        (error: any) => {
          this.serverError = 'Hi Error';
          console.log(error);
        }
      );
    } else {
      this.servicenocode
        .updateData(this.datapost, this.id)
        .subscribe((data) => {
          console.log('data')
          let snackBarRef=  this.snackbar.open(data.message, 'Dismiss',{
            horizontalPosition:'center',
            verticalPosition:'top',
            direction:'ltr',

          })
          snackBarRef.afterDismissed().subscribe(()=>{
            this.formdata.reset();
            this.router.navigate(['/dashboard','allusers']);
          })

          console.log(data);
        }, (error)=>{
          console.log('error')
          let snackBarRef=  this.snackbar.open(error.statusText, 'Dismiss',{
            horizontalPosition:'center',
            verticalPosition:'top',
            direction:'ltr',

          })
          console.log(error)
        });
    }
  }

  resetForm(){
    this.registerForm.reset();
  }
}
