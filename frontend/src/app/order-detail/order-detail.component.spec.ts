import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { OrderService } from '../service/order.service';
import { ProductService } from '../service/product.service';

import { OrderDetailComponent } from './order-detail.component';

describe('OrderDetailComponent', () => {
  let component: OrderDetailComponent;
  let fixture: ComponentFixture<OrderDetailComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [HttpClient,HttpHandler,{
        provide: ActivatedRoute,
        useValue: {
          paramMap: of({id: 1}),
        },
      }, OrderService, ProductService ],
      declarations: [ OrderDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
