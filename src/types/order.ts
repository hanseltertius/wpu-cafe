import { OrderStatus } from '../constants/orderStatus';
import { ICart } from './cart';

interface IOrder {
  id: string;
  customer_name: string;
  table_number: string;
  cart: ICart[];
  status: 'PENDING' | 'PROCESSING' | 'COMPLETE';
  total: number;
  created_at?: string;
  updated_at?: string;
}

export type { IOrder };
