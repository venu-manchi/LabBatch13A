import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtowishlistComponent } from './components/addtowishlist/addtowishlist.component';
import { CardListComponent } from './components/card-list/card-list.component';


const routes: Routes = [
  { path: 'my-wishlist', component: AddtowishlistComponent },
  { path: 'my-orders', component: MyOrdersComponent },
  {path : 'productlist', component:CardListComponent},
  {path: 'home', component: HomeComponent}
  // {path: 'productlist/:id', component: CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

