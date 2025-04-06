import { ChangeEvent, FormEvent } from 'react';
import styles from './CustomerInfo.module.css';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import { tableNumbers } from './CustomerInfo.constants';
import { ICart } from '../../../types/cart';
import Cart from '../../ui/Cart';

interface IPropTypes {
  id: string;
  customerName: string;
  tableNumber: string;
  cartList: ICart[];
  onCustomerNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onTableNumberChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handlePlusButton: () => void;
  handleMinusButton: () => void;
  handleEditButton: () => void;
  handleDeleteButton: () => void;
}

const CustomerInfo = (props: IPropTypes) => {
  const {
    id,
    customerName,
    tableNumber,
    cartList,
    onCustomerNameChange,
    onTableNumberChange,
    handlePlusButton,
    handleMinusButton,
    handleEditButton,
    handleDeleteButton,
  } = props;

  /**
   * Layout (pake flexbox) :
   * - customer information
   * - layout to contain list of Cart, pake flexbox aja dengan flex : 1, trus di bikin scrollable
   * - Button for Submit Order (disable while empty)
   */

  const handleCustomerInfo = (event: FormEvent) => {
    event.preventDefault();

    if (cartList.length === 0) return;
  };

  // TODO : form-content
  // TODO : form-footer
  // TODO : sebisa mungkin itu customer info nya bisa di handle di popup maupun di bagian component

  return (
    <form id={id} className={styles.form} onSubmit={handleCustomerInfo}>
      <div className={styles['form-content']}>
        <div className={styles['customer-info']}>
          <Input
            id="customerName"
            label="Customer Name"
            placeholder="Enter your Name"
            value={customerName}
            onChange={onCustomerNameChange}
            isRequired
          />

          <Select
            id="tableNumber"
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
                <div
                  key={cart.id}
                  className={
                    index < cartList.length - 1
                      ? styles['cart-item-with-separator']
                      : ''
                  }
                >
                  <Cart
                    cart={cart}
                    handleMinusButton={handleMinusButton}
                    handlePlusButton={handlePlusButton}
                    handleEditButton={handleEditButton}
                    handleDeleteButton={handleDeleteButton}
                  />
                </div>
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>
      </div>
      <div className={styles['form-footer']}>
        <Button id="submit" type="submit">
          Add to Cart
        </Button>
      </div>
    </form>
  );
};

export default CustomerInfo;
