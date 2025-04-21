import styles from './Cart.module.css';
import { ICart } from '../../../types/cart';
import Button from '../Button';
import { ButtonColor, ButtonIconType } from '../Button/Button.constants';
import useCartStore from '../../../stores/CartStore';
import Text from '../Text';

interface IPropTypes {
  cart: ICart;
  handleEditButton: (id: string, name: string) => void;
}

const Cart = (props: IPropTypes) => {
  const { cart, handleEditButton } = props;

  const { decrementItemInCart, incrementItemInCart, removeCart } =
    useCartStore();

  return (
    <div className="card-item">
      <div className="card-item-content-wrapper">
        <div className="card-item-content-container">
          <div className={styles['content-container']}>
            <Text
              id={`cart-name-${cart.menuItemId}`}
              className="card-item-subtitle"
            >
              {cart.name}
            </Text>
            <div className={styles['option-container']}>
              <Button
                id="minus"
                isIcon
                onClick={() => {
                  if (!!cart.menuItemId) decrementItemInCart(cart.menuItemId);
                }}
                iconType={ButtonIconType.MINUS}
                color={ButtonColor.DANGER}
                className="small"
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
                className="small"
              />
            </div>
          </div>
          {cart.notes && cart.notes?.length > 0 && (
            <div className="card-item-note-container">{cart.notes}</div>
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
                  if (!!cart.menuItemId)
                    handleEditButton(cart.menuItemId, cart.name || '');
                }}
                className="small"
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
                className="small"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
