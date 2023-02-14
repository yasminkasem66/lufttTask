import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../@Appservice/models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  products: Product[] = [];
  colors: string[] = [
    '#FF8B64',
    '#55C2E6',
    '#FF5E7D',
    '#FF8B64',
    '#55C2E6',
    '#14AE5C',
    '#7335D2',
    '#F1C75B',
    '#14AE5C',
    '#7335D2',
  ];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.products = this.route.snapshot.data['products'];
    console.log("this.products", this.products);

  }
}
