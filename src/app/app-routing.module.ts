import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { SampleFormComponent } from './components/sample-form/sample-form.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'user',
    component: SingleUserComponent
  },
  {
    path: 'user/:userID',
    component: SingleUserComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'cart/:userID/:userName',
    component: CartComponent
  },
  {
    path: 'form',
    component: SampleFormComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
