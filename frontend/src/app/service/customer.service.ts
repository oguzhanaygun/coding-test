import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private dataUrl = 'assets/data/customers.json';
  private customers:any;
  constructor(private http: HttpClient) {
    this.getCustomers().subscribe({
      next: (customers) => {
        this.customers = new Map<number, Object>(customers.map(c => [c.id, c]));
        console.log(this.customers)
      },
      error: (error) => {
        console.log("Can not get customers")
        console.log(error);
      },
      complete: () => {
        console.log('Request complete');
      }
    });
   }

  private getCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.dataUrl);
  }

  getCustomer(id:number) {
    return this.customers.get(id);
  }
}
