import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../model/item';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  item!: Item;
  @Input()
  header: String = "Item";

  @Output()
  deleteItemEvent = new EventEmitter<string>();

  @Output()
  addItemEvent = new EventEmitter<Item>();

  @Output()
  updateItemEvent = new EventEmitter<Item>();


  product!: Product;
  edited:boolean = false;
  newItem: boolean = false;
  deleteProgress: boolean = false;
  saveProgress: boolean = false;
  products!: Map<String, Product>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
    if (!this.item) {
      this.newItem = true;
      this.item = { "product-id": "0", "unit-price": "0", quantity: "0", total: "0" }
    }
  }

  getAllProducts() {
    return this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = new Map<any, Product>(products.map(p => [p.id, p]));
        this.product = this.products.get(this.item["product-id"])!;
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

  productSelect(){
    this.product = this.products.get(this.item["product-id"])!;
  }

  saveQuentity(value: any) {
    this.item.quantity = value;
    this.edited = true;
  }

  savePrice(value: any) {
    this.item['unit-price'] = value;
    this.edited = true;
  }

  saveTotal(value: any) {
    this.item.total = value;
    this.edited = true;
  }

  saveProduct(value: any) {
    this.item["product-id"] = value;
    this.edited = true;
  }

  deleteItem() {
    this.deleteProgress = true;
    this.deleteItemEvent.emit(this.item["product-id"]);
    this.deleteProgress = false;
  }

  saveItem() {
    this.saveProgress = true;
    if (this.newItem) {
      this.addItemEvent.emit(this.item);
      this.item = { "product-id": "0", "unit-price": "0", quantity: "0", total: "0" }
    } else {
      this.updateItemEvent.emit(this.item);
      this.edited = true;
    }
    this.saveProgress = false;
  }

}
