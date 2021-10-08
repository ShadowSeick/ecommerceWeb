import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product!: Product;
  public numberOfProducts!: number;
  
  constructor() { }

  ngOnInit(): void{
    this.product = new Product('New Product', 10.00, 'assets/img/product-stock-image.jpg');
    this.numberOfProducts = 0;
  }

  productOnSale(): void {
    console.log('This product is on sale!');
    this.product.onSale = !this.product.onSale;
  }

  productsOnCartIncrease(): void {
    this.numberOfProducts++;
  }

  productsOnCartDecrease(): void {
    this.numberOfProducts--;
  }

  isProductInCart(): boolean {
    return this.numberOfProducts > 0;
  }

}
