import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { Order } from '../model/order'
import { OrderService } from '../service/order.service';
import { Item } from '../model/item';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  orderId: any;
  order!: Order;
  loader:boolean = true;
  constructor(private orderService: OrderService, private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.orderId = params.get('id');
    });
    this.getOrder();
  }

  getOrder() {
    this.orderService.getOrders().subscribe({
      next: (orders) => {
        this.order = new Map<any, Order>(orders.map(o => [o.id, o])).get(this.orderId)!;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Request complete');
      }
    });
  }

  placeOrder(){
    console.log("order");
    this.orderService.saveOrder(this.order).subscribe({
      next: data => {
        Swal.fire('order Placed.');
      },
      error: error => {
        Swal.fire('Error Occured while deleting.');
      }
    });
  }

  deleteOrder(){
    Swal.fire({  
      title: 'Do you want to delete the order?',  
      showCancelButton: true,  
      confirmButtonText: `Yes`,  
    }).then((result) => {   
        if (result.isConfirmed) {    
          this.router.navigate(['']);
        }
    });
  }

  deleteItem(id: String) {
    this.order.items = this.order.items.filter((i: Item) => i["product-id"] != id);
    this.orderService.saveOrder(this.order).subscribe({
      next: data => {
        Swal.fire('Deleted.');
      },
      error: error => {
        Swal.fire('Error Occured while deleting.');
      }
    });

  }

  addItem(item: Item) {
    this.order.items.push(item);
    this.orderService.saveOrder(this.order).subscribe({
      next: data => {
        Swal.fire('Saved.');
      },
      error: error => {
        Swal.fire('Error Occured while deleting.');
      }
    });
  }

  updateItem(item: Item){
    let index = this.order.items.findIndex((i:Item) => i["product-id"]== item["product-id"])
    this.order.items[index] = item;
    this.orderService.saveOrder(this.order).subscribe({
      next: data => {
        Swal.fire('Saved.');
      },
      error: error => {
        Swal.fire('Error Occured while deleting.');
      }
    });
  }
}