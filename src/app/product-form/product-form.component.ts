import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '../product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() name;
  form: FormGroup;
  formSubmitted = false;

  constructor(public activeModal: NgbActiveModal,  private productService: ProductService,
              private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [],
      name: [, Validators.required],
      category: [, Validators.compose([Validators.required])],
      description: [, Validators.required],
      price: [, Validators.compose([Validators.required])], // price % 5 == 0
      promo: [, Validators.compose([Validators.required, Validators.max(100)])],
    });
  }

  save(): void {
    this.formSubmitted = false;
    if (this.form.valid) {
      this.productService.add(this.form.value).subscribe();
      this.activeModal.close();
      this.productService.call.emit('');
    }
  }
}
