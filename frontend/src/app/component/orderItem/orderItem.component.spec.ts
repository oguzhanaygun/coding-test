import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Item } from 'src/app/model/item';
import { ProductService } from 'src/app/service/product.service';


import { OrderItemComponent } from './orderItem.component';

describe('ProductComponent', () => {
  let component: OrderItemComponent;
  let fixture: ComponentFixture<OrderItemComponent>;
  let item:Item = {
    'product-id': '0',
    quantity: '0',
    'unit-price': '0',
    total: '0'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [HttpClient,HttpHandler,ProductService],
      declarations: [ OrderItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderItemComponent);
    component = fixture.componentInstance;
    component.item = item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render select element if no id given', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const selectElement = compiled.querySelectorAll('select');
    expect(selectElement.length).toEqual(0);
  });
});
