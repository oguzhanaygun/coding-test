import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { OrderListComponent } from './view/orderList/orderList.component';
import { PagenotfoundComponent } from './view/pagenotfound/pagenotfound.component';
import { OrderDetailComponent } from './view/orderDetail/orderDetail.component';
import { RouterModule } from '@angular/router';
import { OrderService } from './service/order.service';
import { ProductService } from './service/product.service';
import { CustomerService } from './service/customer.service';
import { OrderItemComponent } from './component/orderItem/orderItem.component';
import { InlineEditComponent } from './component/inlineEdit/inlineEdit.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderListComponent,
    PagenotfoundComponent,
    OrderDetailComponent,
    OrderItemComponent,
    InlineEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [OrderService,ProductService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
