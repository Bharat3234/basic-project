import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements
  OnChanges,
  OnInit,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  @Input() dataFromParent = 'QWERTY';
  todoData: any = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[ngOnChanges]');
    // console.log('changes :', changes);
  }

  ngOnInit(): void {
    console.log('Home Component Initialized [ngOnInit]');
    this.fetchData();
  }

  ngDoCheck(): void {
    console.log('[ngDoCheck]');
  }

  ngAfterContentInit(): void {
    console.log('[ngAfterContentInit]');
  }

  ngAfterContentChecked(): void {
    console.log('[ngAfterContentChecked]');
  }

  ngAfterViewInit(): void {
    console.log('[ngAfterViewInit]');
  }

  ngAfterViewChecked(): void {
    console.log('[ngAfterViewChecked]');
  }

  ngOnDestroy(): void {
    console.log('Home Component Destroyed [ngOnDestroy]');
  }

  fetchData() {
    this.requestRemoteServer().subscribe((resp: any) => {
      this.todoData = resp;
    })
  }

  requestRemoteServer() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }

  /*
  1. ngOnChanges() - called once before ngOnInit, then evry occurance of @Input() variable value change (only if input variable is present on component)
  2. ngOnInit() - after ngOnChanges
  
  3. ngDoCheck() - every time after ngOnChanges(), immediately after ngOnInit()
  
  4. ngAfterContentInit() - called once after first run of ngDoCheck
  5. ngAfterContentChecked() - Called after ngAfterContentInit, every subsequent ngDoCheck()
  
  6. ngAfterViewInit() - called once after the first ngAfterContentChecked()
  7. ngAfterViewChecked() - called after ngAfterViewInit(), every subsequent ngAfterContentChecked()
  
  8. ngOnDestroy() - when component gets destroyed (unloaded)
  */



}
