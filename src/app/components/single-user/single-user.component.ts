import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

  userIDFromURL: any = '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userIDFromURL = this.activatedRoute.snapshot.paramMap.get('userID');
    
    // route params
    this.activatedRoute.params.subscribe(paramsData => {
      console.log('paramsData :', paramsData);
    });

    // Query params
    this.activatedRoute.queryParams.subscribe(queryParamsData => {
      console.log('queryParamsData :', queryParamsData);
    });
  }

}
