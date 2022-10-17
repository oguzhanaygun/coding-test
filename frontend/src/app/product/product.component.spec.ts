import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Item } from '../model/item';
import { ProductService } from '../service/product.service';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let item:Item = {
    'product-id': '0',
    quantity: '0',
    'unit-price': '0',
    total: '0'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [HttpClient,HttpHandler,ProductService],
      declarations: [ ProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
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
