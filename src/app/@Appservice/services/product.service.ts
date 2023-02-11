import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Product } from '../models/product';
import { URLs } from '../urls/urls';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  //#region  get All
  getAll(): Observable<Product[]> {
    return this.http
      .get<Product[]>(URLs.getProducts)
      .pipe(tap((data: any) => console.log({ data })));
  }
  //#endregion
}
