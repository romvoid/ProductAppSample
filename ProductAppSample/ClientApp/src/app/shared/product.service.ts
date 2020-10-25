import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  formData: Product = new Product();
  readonly rootURL = 'https://localhost:5001/api';
  list: Product[];

  constructor(private http: HttpClient) { }

  postProduct() {
    return this.http.post(`${this.rootURL}/Products`, this.formData);
  }

  putProduct() {
    return this.http.put(`${this.rootURL}/Products/${this.formData.ProductId}`, this.formData);
  }

  deleteProduct(id) {
    return this.http.delete(`${this.rootURL}/Products/${id}`);
  }

  refreshList() {
    this.http.get(`${this.rootURL}/Products/`)
      .toPromise()
      .then(res => this.list = res as Product[]);
  }
}
