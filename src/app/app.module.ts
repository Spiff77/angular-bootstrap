import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {ProductComponent} from './product/product.component';
import {ProductsCardsComponent} from './products-cards/products-cards.component';
import {SideMenuProductsComponent} from './side-menu-products/side-menu-products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    AboutComponent,
    SideMenuProductsComponent,
    HomeComponent,
    ProductsCardsComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
