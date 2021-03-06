import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  productDetails: any = [];

  constructor() { }

  ngOnInit(): void {
    console.log('Products component initialized [ngOnInit]');
    this.productDetails = [
      {
        userName: 'Bharat Biotech',
        productID: 'PR123',
        productName: 'Product 1',
        price: 123
      },
      {
        userName: 'Zydus Wellness',
        productID: 'PR456',
        productName: 'Product 2',
        price: 456
      },
      {
        userName: 'Zydus Wellness',
        productID: 'PR789',
        productName: 'Product 3',
        price: 789
      },
      {
        userName: 'Pure Healthcare',
        productID: 'PR101',
        productName: 'Product 4',
        price: 101
      }
    ];
  }

  ngOnDestroy(): void {
    console.log('Products component destroyed [ngOnDestroy]');
  }

}
