import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../product.model";

/**
 * @ProdcutsList: A component for rendering all products rows
 * storing the currently selected Product
 */
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  /**
   * @input productsList - the Product[] passed to use
   */
  @Input() productsList!: Product[];
  /**
   * @output onProductSelected - outputs the current product
   * whenever a new product is selected
   */
  @Output() onProductSelected: EventEmitter<Product>

  /**
   * @property currentProduct  - local state containing
   * the current selected product
   */
  private currentProduct!: Product

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product:Product) {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product:Product): boolean {
    if(!product || !this.currentProduct) return  false;
    return  product.sku === this.currentProduct.sku;
  }

}
