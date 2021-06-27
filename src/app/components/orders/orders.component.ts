import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  data: any = [];
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  requestServer() {
    // get => no data will be shared in request body, is used to get data
    // post => data will be shared in request body, is used to post data
    return this.httpClient.get('http://localhost:8080/users');
    // return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  getData() {
    this.requestServer().subscribe((resp: any) => {
      this.data = resp;
      console.log('this.data :', this.data);
    });
  }

}
