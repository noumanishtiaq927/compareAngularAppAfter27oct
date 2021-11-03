import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { componentFactoryName } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material/material.module';

import { NocodeapiCrudService } from './nocodeapi-crud.service';

describe('NocodeapiCrudService', () => {
  let service: NocodeapiCrudService;
  let httpMock : HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ]
      ,
      providers:[HttpClient, NocodeapiCrudService]
    });
    service = TestBed.inject(NocodeapiCrudService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(()=>{
    httpMock.verify()
  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test the get data method',()=>{
      const dummydata = [
      {userId:'1',id:1, body:'Hello World', title: 'Testing Angular'},
      {userId:'2',id:2, body:'Hello Bye Bye', title: 'Testing Not Angular'},
    ]
       service.getData().subscribe(posts => {
         expect(posts.length).toBe(3)
         expect(posts).toEqual('dummydataa')
       })
       const request = httpMock.expectOne(service.url)
       expect(request.request.method).toBe('GET')
       request.flush(dummydata)
      })
  it('should test the post data method',()=>{
      const dummydata = [
      {firstName:'barry',lastName:'allen', password:'Hello World', address: 'Testing Angular'},
      {firstName:'oliver',lastName:'queen', password:'Hello Bye Bye', address: 'Testing Not Angular'},
    ]
    const postdata = 
    {
      firstName:'barry',
      lastName:'allen', 
      password:'Hello World', 
      address: 'Testing Angular',
      email:'nmk@gm.com',
      mobile:1234,
      designation:'ceo',
      department:'sales'
    }

       service.postData(postdata).subscribe(posts => {
         expect(posts.length).toBe(3)
         expect(posts).toEqual('dummydataa')
       })
       const request = httpMock.expectOne(service.url)
       expect(request.request.method).toBe('GET')
       expect(request.request.body).toBe([postdata])
       request.flush(dummydata)
      })
 
});
