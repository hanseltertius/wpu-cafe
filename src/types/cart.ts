import { IMenu } from './menu';

interface ICart {
  menuItemId: string;
  name?: string;
  quantity: number;
  notes?: string;
  menuItem?: IMenu;
}

export type { ICart };
