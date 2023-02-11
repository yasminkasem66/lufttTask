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

  constructor(private productService: ProductService) {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAll().subscribe({
      next: (data: any) => {
        this.products = data.products;
      },
    });
  }

  ngOnInit(): void {}
}
