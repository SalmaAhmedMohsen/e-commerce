import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProdustsComponent } from './produsts/produsts.component';
import { AboutComponent } from './about/about.component';
import { CustomersComponent } from './customers/customers.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'products', component: ProdustsComponent, title: 'Products' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'customers', component: CustomersComponent, title: 'Customers' },
  {
    path: 'productDetails/:id',
    component: ProductDetailsComponent,
    title: 'Product Details',
  },
  { path: 'search', component: SearchComponent },
  {
    path: 'category/:categoryName',
    component: CategoryComponent,
    title: 'Category',
  },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
