import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('Hi, I\'m neo. Thank you for sharing my product!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  //share(string str) {
    //window.alert('Hi, I\'m neo. Thank you for sharing my product '+str+'!');
  //}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/