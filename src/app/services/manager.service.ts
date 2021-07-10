import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ManagerService {

  userType = 'ADMIN';
  serverURL = 'http://localhost:8080';
  userDetails = [
    {
      userID: 'US123',
      userName: 'Bharat Biotech',
      email: 'admin@biotech.com',
      address: 'Mumbai'
    },
    {
      userID: 'US456',
      userName: 'Zydus Wellness',
      email: 'admin@zydus.com',
      address: 'Chennai'
    },
    {
      userID: 'US789',
      userName: 'Pure Healthcare',
      email: 'admin@pure.com',
      address: 'Bangalore'
    }
  ];

  constructor(
    private httpClient: HttpClient
  ) { }

  getRequest(url: string) {
    console.log('URL from manager.service.ts :', url);
    return this.httpClient.get(`${this.serverURL}/${url}`);
  }

  postRequest(url: string, data: object) {
    console.log('URL from manager.service.ts :', url);
    console.log('data :', data);
    return this.httpClient.post(`${this.serverURL}/${url}`, data);
  }

}
