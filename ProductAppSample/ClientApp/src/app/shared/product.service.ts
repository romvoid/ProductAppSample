import { Product } from './product.model';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  formData: Product = new Product();
  list: Product[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  postProduct() {
    return this.http.post(this.baseUrl + 'api/Products', this.formData);
  }

  putProduct() {
    return this.http.put(this.baseUrl + `api/Products/${this.formData.ProductId}`, this.formData);
  }

  deleteProduct(id) {
    return this.http.delete(this.baseUrl + `api/Products/${id}`);
  }

  refreshList() {
    this.http.get(this.baseUrl + `api/Products/`)
      .toPromise()
      .then(res => this.list = res as Product[]);
  }
}
