import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit {

  @Input() public product!: Product;
  @Output() increaseProductsOnCart: EventEmitter<Product>;
  @Output() decreaseProductsOnCart: EventEmitter<Product>;

  public productClasses!: Object;
  public dropDownNumberProducts= [...new Array(21).keys()];
  
  constructor() { 
    this.increaseProductsOnCart = new EventEmitter<Product>();
    this.decreaseProductsOnCart = new EventEmitter<Product>();
  }

  ngOnInit(): void{
    this.productClasses = {
      "onSale": this.product.onSale,
      "normalPrice": !this.product.onSale
    }
  }

  onIncreaseProductsOnCart(event: Event): void {
    this.increaseProductsOnCart.emit(this.product);
  }

  onDecreaseProductsOnCart(event: Event): void {
    this.decreaseProductsOnCart.emit(this.product);
  }

  isProductInCart(): boolean {
    return this.product.productsInCart > 0;
  }

}
