import { Component, OnInit } from '@angular/core';
import { Product } from '../@Appservice/models/product';
import { ProductService } from '../@Appservice/services/product.service';

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

  constructor(private productService: ProductService) {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAll().subscribe({
      next: (data: any) => {
        this.products = data.products;
        // this.products.map((d, i) => (d.color = this.colors[i]));
        // console.log("this.products",this.products);
      },
    });
  }

  ngOnInit(): void {}
}
