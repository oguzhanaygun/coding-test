import { Item } from './item'
export interface Order {
    id: number;
    "customer-id": number;
    items: Item[];
    total: number;
}

