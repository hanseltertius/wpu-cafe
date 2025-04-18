import { ChangeEvent, FormEvent } from 'react';
import styles from './CustomerInfo.module.css';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import { tableNumbers } from './CustomerInfo.constants';
import { ICart } from '../../../types/cart';
import Cart from '../../ui/Cart';
import { ButtonColor } from '../../ui/Button/Button.constants';

interface IPropTypes {
  id: string;
  customerName: string;
  tableNumber: string;
  cartList: ICart[];
  onCustomerNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onTableNumberChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleEditButton: (id: string) => void;
  handleCreateOrder: (event: FormEvent) => void;
}

const CustomerInfo = (props: IPropTypes) => {
  const {
    id,
    customerName,
    tableNumber,
    cartList,
    onCustomerNameChange,
    onTableNumberChange,
    handleEditButton,
    handleCreateOrder,
  } = props;

  return (
    <form id={id} className={styles.form} onSubmit={handleCreateOrder}>
      <div className={styles['form-content']}>
        <div className={styles['customer-info']}>
          <Input
            id="customerName"
            width="100%"
            label="Customer Name"
            placeholder="Enter your Name"
            value={customerName}
            onChange={onCustomerNameChange}
            isRequired
          />

          <Select
            id="tableNumber"
            width="100%"
            label="Table Number"
            value={tableNumber}
            onChange={onTableNumberChange}
            options={tableNumbers}
          />
        </div>
        <div className={styles['cart-scroll-wrapper']}>
          <div className={styles['cart-container']}>
            {cartList.length > 0 ? (
              cartList.map((cart: ICart, index: number) => (
                <div key={cart.id}>
                  <Cart cart={cart} handleEditButton={handleEditButton} />
                </div>
              ))
            ) : (
              <div className={styles['cart-empty-container']}>
                Your cart is empty
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles['form-footer']}>
        <Button
          id="submit"
          type="submit"
          width="100%"
          color={ButtonColor.PRIMARY}
        >
          Create Order
        </Button>
      </div>
    </form>
  );
};

export default CustomerInfo;
