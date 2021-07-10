import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [
    trigger('circle-anim', [

      state('square', style({
        borderRadius: '0px'
      })),

      state('middle', style({
        borderRadius: '10px'
      })),

      state('round', style({
        borderRadius: '100px'
      })),

      transition('square => middle', [
        animate('10s')
      ]),

      transition('square => round', [
        animate('15s')
      ]),

      transition('round => square', [
        animate('15s')
      ])

    ])
  ]
})
export class AdminComponent implements OnInit {

  stateName: string = 'square';

  constructor() { }

  ngOnInit(): void {
  }

  changeState(stateValue: string) {
    this.stateName = stateValue;
  } 

}
