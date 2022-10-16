import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/order';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private dataUrl = environment.orderServiceUrl;
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
