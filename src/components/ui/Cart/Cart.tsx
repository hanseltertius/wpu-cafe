import styles from './Cart.module.css';
import { ICart } from '../../../types/cart';
import Button from '../Button';
import { ButtonColor, ButtonIconType } from '../Button/Button.constants';
import useCartStore from '../../../stores/CartStore';

interface IPropTypes {
  cart: ICart;
  handleEditButton: (id: string) => void;
}

const Cart = (props: IPropTypes) => {
  const { cart, handleEditButton } = props;

  const { decrementItemInCart, incrementItemInCart, removeCart } =
    useCartStore();

  return (
    <div className={styles.container}>
      <div className={styles['content-container']}>
        <h2>{cart.name}</h2>
        <div className={styles['option-container']}>
          <Button
            id="minus"
            isIcon
            onClick={() => {
              if (!!cart.menuItemId) decrementItemInCart(cart.menuItemId);
            }}
            iconType={ButtonIconType.MINUS}
            color={ButtonColor.DANGER}
            className={styles.small}
          />
          <strong>{cart.quantity}</strong>
          <Button
            id="plus"
            isIcon
            onClick={() => {
              if (!!cart.menuItemId) incrementItemInCart(cart.menuItemId);
            }}
            iconType={ButtonIconType.PLUS}
            color={ButtonColor.SUCCESS}
            className={styles.small}
          />
        </div>
      </div>
      {cart.notes && cart.notes?.length > 0 && (
        <div className={styles.note}>{cart.notes}</div>
      )}
      <div className={styles['content-container']}>
        <div></div>
        <div className={styles['button-container']}>
          <Button
            id="edit"
            isIcon
            isCircularIcon
            iconType={ButtonIconType.EDIT}
            onClick={() => {
              if (!!cart.menuItemId) handleEditButton(cart.menuItemId);
            }}
            className={styles['icon-small']}
          />
          <Button
            id="delete"
            isIcon
            isCircularIcon
            iconType={ButtonIconType.DELETE}
            color={ButtonColor.DANGER}
            onClick={() => {
              if (!!cart.menuItemId) removeCart(cart.menuItemId);
            }}
            className={styles['icon-small']}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
