import { ICart } from './cart';

interface ICustomerInfo {
  customerName: string;
  tableNumber: number;
  cart: ICart[];
}

export type { ICustomerInfo };
