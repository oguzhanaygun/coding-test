import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderlistComponent } from './order-list/orderlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { RouterModule } from '@angular/router';
import { OrderService } from './service/order.service';
import { ProductService } from './service/product.service';
import { CustomerService } from './service/customer.service';
import { ProductComponent } from './product/product.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderlistComponent,
    PagenotfoundComponent,
    OrderDetailComponent,
    ProductComponent,
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
