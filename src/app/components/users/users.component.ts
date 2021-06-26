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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userData = this.managerService.userDetails;
  }

  goToSingle(clickedUserID: string) {
    this.router.navigate(['/user', clickedUserID]);
  }

}
