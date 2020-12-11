import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

import {ProductsCardsComponent} from './products-cards/products-cards.component';
import {ProductComponent} from './product/product.component';
import {SideMenuProductsComponent} from './side-menu-products/side-menu-products.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductComponent, children: [
      {path: '', component: ProductsCardsComponent},
      {path: '', outlet: 'sidemenu', component: SideMenuProductsComponent}
    ]},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
