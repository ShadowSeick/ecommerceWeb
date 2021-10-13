import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  template: `<div class="row row-cols-sm-1 row-cols-lg-2 row-cols-xl-4 g-2">
                  <div class="col" *ngFor="let product of products">
                  <app-product-item [product]="product" 
                                    (increaseProductsOnCart)="onIncreaseProductsOnCart($event)"
                                    (decreaseProductsOnCart)="onDecreaseProductsOnCart($event)"></app-product-item>
              </div>
            </div>`,
  styles: [``]
})
export class ProductListComponent implements OnInit {

  public products: Array<Product> = Array();

  constructor() { }

  ngOnInit(): void {
    this.generateArrayProducts(3);
  }

  generateArrayProducts(numberItems: number) {
    let id = 0
    for (let i = 0; i < numberItems; i++){
      let product: Product = new Product(id, 'New Product', 10.00, 'assets/img/product-stock-image.jpg');
      this.products.push(product);
      id++;
    }
  }

  onIncreaseProductsOnCart(product: Product) {
    this.products[product.id].productsInCart++;
  }

  onDecreaseProductsOnCart(product: Product) {
    this.products[product.id].productsInCart--;
  }

}
