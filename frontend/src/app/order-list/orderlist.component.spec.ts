import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CustomerService } from '../service/customer.service';
import { OrderService } from '../service/order.service';

import { OrderlistComponent } from './orderlist.component';

describe('OrderlistComponent', () => {
  let component: OrderlistComponent;
  let fixture: ComponentFixture<OrderlistComponent>;
  let mockOrderService;
  let mockCustomerService: { getCustomer: { (arg0: number): any; (arg0: number): any; and: any; }; };
  beforeEach(async () => {
    mockOrderService = jasmine.createSpyObj(['getOrders']);
    mockOrderService.getOrders.and.returnValue(of([{
      "id": "1",
      "customer-id": 2,
      "items": [
        {
          "product-id": "B102",
          "quantity": "10",
          "unit-price": "4.99",
          "total": "49.90"
        }
      ],
      "total": "49.90"
    }]));

    mockCustomerService = jasmine.createSpyObj(['getCustomer'],["id"]);
    mockCustomerService.getCustomer.and.returnValue({
      "id": 2,
      "name": "Teamleader",
      "since": "2015-01-15",
      "revenue": "1505.95"
    });

    await TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, { provide: CustomerService, useValue: mockCustomerService }, { provide: OrderService, useValue: mockOrderService }],
      declarations: [OrderlistComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OrderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('table tbody tr')?.length).toBeGreaterThan(0);
  });

  it('should render table rows value correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelector('table tbody tr')?.querySelectorAll('td')
    let rowValues:any[] = [];
    rows?.forEach((row) => rowValues.push(row.textContent));
    expect(rowValues).toEqual(['1', ' Teamleader ', '1', '49.9', 'Go to Detail']);
  });
});
