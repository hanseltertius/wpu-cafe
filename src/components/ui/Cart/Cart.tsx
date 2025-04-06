import styles from './Cart.module.css';
import { ICart } from '../../../types/cart';
import Button from '../Button';
import { ButtonColor, ButtonIconType } from '../Button/Button.constants';

interface IPropTypes {
  cart: ICart;
  handlePlusButton: () => void;
  handleMinusButton: () => void;
  handleEditButton: () => void;
  handleDeleteButton: () => void;
}

const Cart = (props: IPropTypes) => {
  const {
    cart,
    handlePlusButton,
    handleMinusButton,
    handleEditButton,
    handleDeleteButton,
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles['content-container']}>
        <h2>{cart.name}</h2>
        <div className={styles['option-container']}>
          <Button
            id="minus"
            isIcon
            onClick={handleMinusButton}
            iconType={ButtonIconType.MINUS}
            color={ButtonColor.DANGER}
            className={styles.small}
          />
          <strong>{cart.quantity}</strong>
          <Button
            id="plus"
            isIcon
            onClick={handlePlusButton}
            iconType={ButtonIconType.PLUS}
            color={ButtonColor.SUCCEED}
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
            onClick={handleEditButton}
            className={styles['icon-small']}
          />
          <Button
            id="delete"
            isIcon
            isCircularIcon
            iconType={ButtonIconType.DELETE}
            color={ButtonColor.DANGER}
            onClick={handleDeleteButton}
            className={styles['icon-small']}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
