import { ProductService } from './../../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styles: []
})
export class ProductFormComponent implements OnInit {

  constructor(public service: ProductService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      ProductId: 0,
      ProductName: '',
      ProductDescription: '',
      ProductType: '',
      ProductSupplier: '',
      ProductManufacturer: ''
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.ProductId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postProduct().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putProduct().subscribe(
      res => {
        this.resetForm(form);
       // this.toastr.info('Submitted successfully', 'Product Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
