import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrls: ['./products-cards.component.css']
})
export class ProductsCardsComponent implements OnInit {

  products: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchData();
    this.productService.call.subscribe(v =>
      this.fetchData()
    );
  }

  fetchData(): void {
    this.productService.findAll().subscribe(v => this.products = v);
  }

}
