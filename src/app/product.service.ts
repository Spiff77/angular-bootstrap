import {EventEmitter, Injectable} from '@angular/core';
import {Product} from './model/product.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  get call(): EventEmitter<any> {
    return this.$call;
  }

  url = 'http://localhost:8080/training/api/products/';
  private $call = new EventEmitter()


  constructor(private http: HttpClient) { }

  add(product: Product): Observable<Product>{;
    return this.http.post(this.url, product) as Observable<Product>;
  }

  delete(productId: number): Observable<Product>{
    return this.http.delete(this.url + '/' + productId)  as Observable<Product>;
  }

  update(product: Product): Observable<Product>{
    return this.http.put(this.url, product) as Observable<Product>;
  }

  findAll(): Observable<Product[]> {

    return this.http.get(this.url)
      .pipe(
        map( v => v['_embedded']),
        map( v => v['products'])
      );
  }

    findOne(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
}
