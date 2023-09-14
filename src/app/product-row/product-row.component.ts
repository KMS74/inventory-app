import { Component, HostBinding, Input } from '@angular/core';
import { Product } from '../product.model';

/**
 * @component: A component for the view of single product
 */
@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
})
export class ProductRowComponent {
  @Input() product!: Product;
  // lets us set attributes on the host element
  // The host is the element this component is attached to.
  // we’re saying that we want to attach the CSS class item to the host element <product-row > </product-row>.
  @HostBinding('class') cssClass = 'item';
}
