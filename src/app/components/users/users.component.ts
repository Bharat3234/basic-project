// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userData: any = [];

  constructor(
    private managerService: ManagerService,
    private router: Router,
    // private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.userData = this.managerService.userDetails;
  }

  goToSingle(clickedUserID: string) {
    this.router.navigate(['/user', clickedUserID]);
  }

  addUser() {
    const newUserData = { id: 34, title: 'Something' };
    // this.serverRequest(newUserData).subscribe((resp: any) => {
    //   console.log('resp :', resp);
    // });
    this.managerService.postRequest('user', newUserData).subscribe((resp: any) => {
      console.log('resp :', resp);
    });
  }

  // serverRequest(data: any) {
  //   return this.httpClient.post('http://localhost:8080/user', data);
  // }
  /*
  GET - to get the data
  POST  - to post the data
  DELETE - to delete the data
  PUT - to update 
  PATCH - to update
  */

}
