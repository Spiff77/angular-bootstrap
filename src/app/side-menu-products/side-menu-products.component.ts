import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '../product.service';
import {ProductFormComponent} from '../product-form/product-form.component';

@Component({
  selector: 'app-side-menu-products',
  templateUrl: './side-menu-products.component.html',
  styleUrls: ['./side-menu-products.component.css']
})
export class SideMenuProductsComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  openform(): void {
    const modalRef = this.modalService.open(ProductFormComponent);
    modalRef.componentInstance.name = 'World';
  }
}
