import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './view/pagenotfound/pagenotfound.component';
import { OrderListComponent } from './view/orderList/orderList.component';
import { OrderDetailComponent } from './view/orderDetail/orderDetail.component';

const routes: Routes = [
  { path: 'orders', component: OrderListComponent },
  { path: 'order/:id/detail', component: OrderDetailComponent },
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
