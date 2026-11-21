
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { Product } from '../../models/product.model';
import { DiscountPricePipe } from '../../pipes/discount-price.pipe';

@Component({
  selector: 'app-product-card',
  // დავამატე Highlightdirective ფონის შესაცვლელად
  imports: [CurrencyPipe, TitleCasePipe, DiscountPricePipe, HighlightDirective],
  templateUrl: './product-card.component.html',
  //  CSS ფაილის მისამართი გავასწორე და ემთხვევა ახლა
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  readonly product = input.required<Product>();

  // addToCart ახლა სწორად მუშაობს
  readonly addToCart = output<Product>();

  readonly viewDetails = output<number>();
}
