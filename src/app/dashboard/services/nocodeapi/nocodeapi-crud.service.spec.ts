import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/app/material/material.module';

import { NocodeapiCrudService } from './nocodeapi-crud.service';
import {datarecords , getrecords} from "./service-test-data"

fdescribe('NocodeapiCrudService', () => {
  let service: NocodeapiCrudService;
  let httpMock:HttpTestingController;
  let http:HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule,

        HttpClientTestingModule
      ],
    providers:[HttpClient]
    });
    service = TestBed.inject(NocodeapiCrudService);
    httpMock= TestBed.inject(HttpTestingController)
    http = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  xit('should test the get data method',()=>{
    let records: any = datarecords
     service.getData().subscribe(record => {

       console.log({records})
       console.log('test data get')
       console.log({record})
       console.log('test data get 2')
       console.log({getrecords})
       expect(record.length).toBe(7)
       expect(getrecords).toEqual(record)
     })
     const request = httpMock.expectOne(service.url)
     expect(request.request.method).toBe('GET')
     request.flush({records})
    })
  xit('should test the post data method',()=>{
  let records = [

    {
    createdTime:new Date(),
    fields:
    {
      address:'New York', dateOfJoining:"2021-01-19",department:'sales',designation:'ceo',
      email:"atom@gmail.com",firstName:'barry',gender:'male',lastName:'ali',password:'123',
      mobile:11111,userId:2,profilePic:[{}]
    },
    id:'reckMi0cJNj69Z4Ic'
  },

  ]
  const postdata =
  {
    address:'New York', dateOfJoining:"2021-01-19",department:'sales',designation:'ceo',
    email:"atom@gmail.com",firstName:'barry',gender:'male',lastName:'ali',password:'123',
    mobile:11111,userId:2
  }

     service.postData(postdata).subscribe(posts => {
          console.log({records})
          console.log({posts})
          expect(posts.records.length).toBe(1)
          expect({records}).toEqual(posts)
     })
     const request = httpMock.expectOne(service.url)
     expect(request.request.method).toBe('POST')
     expect(request.request.body).toEqual([postdata])
     expect(request.request.responseType).toBe('json')
     request.flush({records})
    })

  xit('should check the login method',()=>{
      let records = datarecords
    let dataget =  {
        address:'New York', dateOfJoining:"2021-01-19",department:'sales',designation:'ceo',
        email:'flash@gmail.com',firstName:'barry',gender:'male',lastName:'ali',password:'11111',
        mobile:11111,userId:2,profilePic: '../../../../assets/pic.jpg'
      }
      service.login('flash@gmail.com', '11111').subscribe(
        (post:any)=>{

          expect(Object.keys(post).length).toBe(12)
          expect(dataget).toEqual(post)
          console.log(post)
        }
      )

        expect({records}).toBeTruthy()
       let request = httpMock.expectOne(service.url)
       expect(request.request.method).toBe('GET')
       expect(request.request.responseType).toBe('json')


      request.flush({records})
    })
    it('should check the login request with wrong credentials',()=>{
      let records = datarecords
      let erroresponse : any
      service.login('flashone@gmail.com', '11111').subscribe(
        (post:any)=>{
          console.log(post)
          expect(records.length).toBe(7)
          expect({records}).toBeDefined()
          console.log(post)
        },
        (error)=>{
          console.log(error)
          erroresponse = error.error.type
        }
      )

        expect({records}).toBeTruthy()
       let request = httpMock.expectOne(service.url)
       expect(request.request.method).toBe('GET')
       expect(request.request.responseType).toBe('json')
      request.error(new ErrorEvent('Wrong Credentials'))
      expect(erroresponse).toBe('Wrong Credentials')
        const msg: ErrorEvent | any = {
          message : "No Credential Found"
        }


    })
    xit('should check the check find data method and check email aready exists',()=>{
      let records = datarecords
      let errresponse:any ='Email Already Exist'
        const postdata =
        {
          firstName:'barry',
          lastName:'allen',
          password:'Hello World',
          address: 'Testing Angular',
          email:'flash@gmail.com',
          mobile:1234,
          designation:'ceo',
          department:'sales'
        }
      service.findData('flash@gmail.com', postdata).subscribe(
        (post:any)=>{

          expect(records.length).toBe(7)
          expect({records}).toBeDefined()

        }, (error)=> {
          console.log(error)
          expect(errresponse).toBe(error.error.type)
          // errresponse = error.error.type

        }
      )

        expect({records}).toBeTruthy()
       let request = httpMock.expectOne(`${service.url}?fields=email`)
       expect(request.request.method).toBe('GET')
       expect(request.request.responseType).toBe('json')
       expect(request.cancelled).toBeFalsy()


       request.error(new ErrorEvent('Email Already Exist'))
expect(errresponse).toBe('Email Already Exist')



    })
    xit('should check the check find data method',()=>{
      let records = datarecords

        const postdata =
        {
          firstName:'barry',
          lastName:'allen',
          password:'Hello World',
          address: 'Testing Angular',
          email:'flash@gmail.com',
          mobile:1234,
          designation:'ceo',
          department:'sales'
        }
      service.findData('flash1ws@gmail.com', postdata).subscribe(
        (post:any)=>{

          expect(records.length).toBe(7)
          expect({records}).toBeDefined()

        },

      )

        expect({records}).toBeTruthy()

       let request = httpMock.expectOne(`${service.url}?fields=email`)
       expect(request.request.method).toBe('GET')
       expect(request.request.responseType).toBe('json')

       expect(request.cancelled).toBeFalsy()


      request.flush({records},{status:200, statusText:'Success'})



    })
    xit('should delete the data',()=>{
      let records = datarecords
      let errresponse:any ='Email Already Exist'
        const postdata =
        {
          firstName:'barry',
          lastName:'allen',
          password:'Hello World',
          address: 'Testing Angular',
          email:'flash@gmail.com',
          mobile:1234,
          designation:'ceo',
          department:'sales'
        }
      service.deleteData('reckMi0cJNj69Z4Ic').subscribe(
        (post:any)=>{

          expect(records.length).toBe(7)
          expect({records}).toBeDefined()

        }, (error)=> {
          console.log(error)
          expect(errresponse).toBe(error.error.type)
          // errresponse = error.error.type

        }
      )

        expect({records}).toBeTruthy()
       let request = httpMock.expectOne(service.url)
       expect(request.request.method).toBe('DELETE')
       expect(request.request.responseType).toBe('json')
       expect(request.request.body).toEqual([ 'reckMi0cJNj69Z4Ic' ])
       expect(request.cancelled).toBeFalsy()



   request.flush({records});


    })

});
