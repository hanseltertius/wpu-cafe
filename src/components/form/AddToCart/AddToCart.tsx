import { ChangeEvent, FormEvent, useEffect } from 'react';
import styles from './AddToCart.module.css';
import Button from '../../ui/Button';
import { ButtonColor, ButtonIconType } from '../../ui/Button/Button.constants';
import Input from '../../ui/Input';
import useInputValue from '../../../hooks/useInputValue';
import Text from '../../ui/Text';
import useCartStore from '../../../stores/CartStore';

interface IPropTypes {
  id: string;
  menuItemId: string;
  name: string;
  handleClosePopup: () => void;
}

const AddToCart = (prop: IPropTypes) => {
  const { id, menuItemId, name, handleClosePopup } = prop;
  const { carts, addItemToCart, editItemInCart } = useCartStore();

  const quantity = useInputValue('1');
  const notes = useInputValue('');

  const cartItem = carts.find((i) => i.menuItemId === menuItemId);

  useEffect(() => {
    if (!!cartItem) {
      quantity.setInputValueRaw(`${cartItem.quantity}`);
      notes.setInputValueRaw(cartItem.notes ?? '');
    }
  }, [cartItem]);

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

    if (!!cartItem) editItemInCart(menuItemId, payload);
    else addItemToCart(payload);
    handleClosePopup();
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
    <form id={id} className="form" onSubmit={handleAddToCart}>
      <div className={styles.content}>
        <div className={styles['quantity-content-container']}>
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
              width="100%"
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
        </div>

        <Input
          id="notes"
          label="Notes"
          width="100%"
          placeholder="Add a note (optional)"
          value={notes.inputValue}
          onChange={notes.setInputValue}
        />
      </div>

      <Button
        id="submit"
        type="submit"
        width="100%"
        color={ButtonColor.SECONDARY}
      >
        Add to Cart
      </Button>
    </form>
  );
};

export default AddToCart;
