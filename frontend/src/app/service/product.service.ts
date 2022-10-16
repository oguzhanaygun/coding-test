import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dataUrl = environment.productServiceUrl;
  private products!:Map<any, Product>;
  constructor(private http: HttpClient) { 
    this.getProducts().subscribe({
      next: (products) => {
        this.products = new Map<any, Product>(products.map(p => [p.id,p]));
      },
      error: (error) => {
        console.log("Can not get products")
        console.log(error);
      },
      complete: () => {
        console.log('Request completed33');
      }
    });
  }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.dataUrl);
  }

  getProduct(id:String) {
    return this.products.get(id);
  }
  
}
