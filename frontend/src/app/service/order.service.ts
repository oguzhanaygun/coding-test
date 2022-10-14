import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private dataUrl = 'assets/data/orders.json';
  constructor(private http: HttpClient) { }

  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(this.dataUrl);
  }
}
