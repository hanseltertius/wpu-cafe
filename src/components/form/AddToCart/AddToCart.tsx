import { ChangeEvent, FormEvent } from 'react';
import styles from './AddToCart.module.css';
import Button from '../../ui/Button';
import { ButtonColor, ButtonIconType } from '../../ui/Button/Button.constants';
import Input from '../../ui/Input';
import useInputValue from '../../../hooks/useInputValue';
import Text from '../../ui/Text';
import { ICart } from '../../../types/cart';

interface IPropTypes {
  id: string;
  menuItemId: string;
  name: string;
  item?: ICart;
}

const AddToCart = (prop: IPropTypes) => {
  /**
   * Sample Payload :
   * id
   * name
   * quantity
   * notes (in the form of Text Area that is non-resizable)
   */

  /**
     * How to create order
     * 
     * {
        "customerName": "John Doe",
        "tableNumber": 5,
        "cart": [
            {
            "menuItemId": "item-uuid",
            "quantity": 2,
            "notes": "Extra hot"
            }
        ]
    }
     */
  const { id, menuItemId, name, item } = prop;

  const quantity = useInputValue(!!item ? `${item.quantity}` : '1');
  const notes = useInputValue(!!item && item.notes ? item.notes : '');

  const handleAddToCart = (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const quantity = parseInt(form.quantity.value);

    const notes = form.notes.value as string;

    const payload = {
      menuItemId: menuItemId,
      name: name,
      quantity,
      notes,
    };

    console.log('payload : ', payload);
  };

  const setQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    quantity.setInputValue(e, (newVal: string) => {
      let newValue: number = parseInt(newVal);
      if (newValue < 1) quantity.setInputValueRaw('1');
      else if (newValue > 99) quantity.setInputValueRaw('99');
    });
  };

  const isMaxQuantity = () => {
    let quantityValue = parseInt(quantity.inputValue);
    return quantityValue === 99;
  };

  const isMinQuantity = () => {
    let quantityValue = parseInt(quantity.inputValue);
    return quantityValue === 1;
  };

  const addQuantity = () => {
    let quantityValue = parseInt(quantity.inputValue);
    if (isMaxQuantity()) return;
    quantity.setInputValueRaw(`${quantityValue + 1}`);
  };

  const subtractQuantity = () => {
    let quantityValue = parseInt(quantity.inputValue);
    if (isMinQuantity()) return;
    quantity.setInputValueRaw(`${quantityValue - 1}`);
  };

  return (
    <form id={id} className={styles.form} onSubmit={handleAddToCart}>
      <div className={styles['form-content']}>
        <Text id="quantityTitle">Quantity</Text>
        <div className={styles['quantity-container']}>
          <Button
            id="quantity-minus"
            isIcon
            onClick={subtractQuantity}
            iconType={ButtonIconType.MINUS}
            color={ButtonColor.DANGER}
            className={styles.small}
          />
          <Input
            id="quantity"
            type="number"
            value={quantity.inputValue}
            width="50%"
            onChange={setQuantity}
          />
          <Button
            id="quantity-plus"
            isIcon
            onClick={addQuantity}
            iconType={ButtonIconType.PLUS}
            color={ButtonColor.SUCCESS}
            className={styles.small}
          />
        </div>

        <Input
          id="notes"
          label="Notes"
          placeholder="Add a note (optional)"
          value={notes.inputValue}
          onChange={notes.setInputValue}
          isRequired
        />
      </div>

      <div className={styles['form-footer']}>
        <Button id="submit" type="submit" width="100%">
          Add to Cart
        </Button>
      </div>
    </form>
  );
};

export default AddToCart;
