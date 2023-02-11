import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../@Appservice/models/product';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() product: Product = {} as Product;
  constructor() {}

  ngOnInit(): void {
    console.log('this.product', this.product);
  }
}
