import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AdminComponent } from './components/admin/admin.component';
import { AnimationComponent } from './components/animation/animation.component';
import { CartComponent } from './components/cart/cart.component';
import { FinanceComponent } from './components/finance/finance.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { SampleFormComponent } from './components/sample-form/sample-form.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { UsersComponent } from './components/users/users.component';
import { UserGuard } from './guards/user.guard';

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
    component: ProductsComponent,
    canActivate: [UserGuard]
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
    path: 'animation',
    component: AnimationComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/admin/accounts'
      },
      {
        path: 'accounts',
        component: AccountsComponent
      },
      {
        path: 'finance',
        component: FinanceComponent
      }
    ]
  },
  // lazy-loading module
  {
    path: 'customer',
    loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
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
