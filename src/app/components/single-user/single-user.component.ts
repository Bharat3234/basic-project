// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

  userIDFromURL: any = '';
  userData: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private managerService: ManagerService
    // private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.userIDFromURL = this.activatedRoute.snapshot.paramMap.get('userID');

    // route params
    this.activatedRoute.params.subscribe(paramsData => {
      console.log('paramsData :', paramsData);
      this.managerService.getRequest(`users/${paramsData.userID}`).subscribe((resp: any) => {
        console.log('resp :', resp);
      });
      /*
      this.requestServer(paramsData.userID).subscribe((resp: any) => {
        console.log('resp :', resp);
        this.userData = resp;
      });
      */
    });

    // Query params
    this.activatedRoute.queryParams.subscribe(queryParamsData => {
      console.log('queryParamsData :', queryParamsData);
    });
  }

  // requestServer(id: number) {
  //   return this.httpClient.get(`http://localhost:8080/users/${id}`);
  // }

}
