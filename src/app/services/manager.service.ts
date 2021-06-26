import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ManagerService {

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

  constructor() { }
}
