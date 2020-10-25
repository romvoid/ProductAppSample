import { ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  constructor(public service: ProductService) { }
  list: Array<any>;

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(ProductId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteProduct(ProductId)
        .subscribe(res => {
          this.service.refreshList();
        },
          err => { console.log(err); })
    }
  }
}
