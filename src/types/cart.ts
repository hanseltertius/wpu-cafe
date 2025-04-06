import { IMenu } from './menu';

interface ICart {
  id?: string;
  menuItemId?: string;
  name?: string;
  quantity: number;
  notes?: string;
  menuItem?: IMenu;
}

export type { ICart };
