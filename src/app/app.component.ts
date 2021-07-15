import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic-project';

  parentVar = 'NEW QWERTY';

  // ng generate module nameOfTheModule

  // ng generate module nameOfTheModule --routing

  // ng generate module services --route services --module app.module 

}
