import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/order';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private dataUrl = 'assets/data/orders.json';
  constructor(private http: HttpClient) {
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.dataUrl);
  }

  saveOrder(order:Order):Observable<any>{
    //return this.http.post<Order>(this.dataUrl,order);
    return of({});
  }

}
