import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('openClose', [

      state('open', style({
        height: '200px',
        backgroundColor: 'yellow'
      })),

      state('close', style({
        height: '0px',
        backgroundColor: 'red'
      })),

      transition('open => close', [
        animate('10s')
      ]),

      transition('close => open', [
        animate('20s')
      ])

    ])
  ]
})

export class AnimationComponent implements OnInit {

  isOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  closeDiv() {
    this.isOpen = false;
  }

  openDiv() {
    this.isOpen = true;
  }

}
