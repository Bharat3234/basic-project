import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    console.log('Component Initialized [ngOnInt]');

    const userName = this.activatedRoute.snapshot.paramMap.get('userName');
    console.log('userName :', userName);

    const userID = this.activatedRoute.snapshot.paramMap.get('userID');
    console.log('userID :', userID);

    const allParams = this.activatedRoute.snapshot.paramMap.getAll('userID');
    console.log('allParams :', allParams);

    const valueFromRoute = this.activatedRoute.params.subscribe((res: any) => {
      console.log('Route Params res :', res);
    });

    const queryParamsFromRoute = this.activatedRoute.queryParams.subscribe((res: any) => {
      console.log('Query Params res :', res);
    });

    // httpClient

    /*
    RouteParams: cart / qwerty
    QueryParams: cart ? userID = 123

    1. registering
    2. router - outlet
    3. call(routerLink)

    navigating from one link(page) to another link(page)
    every link(page) will loan one component

    to share data between two components using url
    1. route parameters
    2. route query parameters
    */

  }

  getRequest() {
    console.log('getRequest START')
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getData() {
    console.log('getData START');
    this.getRequest().subscribe((response: any) => {
      console.log('response :', response);
      console.log('getRequest END')
    });
    console.log('getData END');
  }

  // Http request methods
  // GET, POST, PUT, PATCH, DELETE

  /*
  createUser - POST (userID, userName, userEmail, contact)
  getUserByUserID - GET?userID=12346
  deleteUser - DELETE
  updateUser - userID, username, email, contact (PUT)
  updateEmail - PATCH
  */

  clicked(name: string, age: string, address: string) {
    this.postRequest(name, age, address).subscribe((res: any) => {
      console.log('res :', res);
    });
  }

  postRequest(name: string, age: string, address: string) {
    return this.http.post('http://localhost:8080/user', { userName: name, age: age, address: address });
  }

  /*
  npm i packageName --save

  node --v

  ng new projectname --skip-tests
  */

}
