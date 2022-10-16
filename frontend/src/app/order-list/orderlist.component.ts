import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { Order } from '../model/order';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  orders : Array<Order> = [];
  loading: boolean = true;
  hasErr:boolean = false;
  constructor(private orderService: OrderService, private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders() {
    this.orderService.getOrders().subscribe({
      next: (orders) => {
        this.orders = orders;
      },
      error: (error) => {
        console.log(error);
        this.hasErr = true;
      },
      complete: () => {
        console.log('Request complete');
        this.loading = false;
      }
    });
  }

   getCustomersName(id:number) {
    return this.customerService.getCustomer(id)!.name;
  }
}
