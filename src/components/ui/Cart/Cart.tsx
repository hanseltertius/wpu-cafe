import styles from './Cart.module.css';
import { ICart } from '../../../types/cart';
import Button from '../Button';
import { ButtonColor, ButtonIconType } from '../Button/Button.constants';

interface IPropTypes {
  cart?: ICart;
}

const Cart = (props: IPropTypes) => {
  // TODO : note itu conditional rendering
  const { cart } = props;

  return (
    <div className={styles.container}>
      <div className={styles['content-container']}>
        <h3>Americano</h3>
        <div className={styles['option-container']}>
          <Button
            id="minus"
            isIcon
            onClick={() => console.log('minus button clicked')}
            iconType={ButtonIconType.MINUS}
            color={ButtonColor.DANGER}
            className={styles.small}
          />
          <strong>1</strong>
          <Button
            id="plus"
            isIcon
            onClick={() => console.log('plus button clicked')}
            iconType={ButtonIconType.PLUS}
            color={ButtonColor.SUCCEED}
            className={styles.small}
          />
        </div>
      </div>
      <div className={styles.note}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        laudantium ratione consequuntur voluptatem vitae aspernatur asperiores
        perferendis repudiandae quasi, odio ullam sit, provident optio
        necessitatibus quidem enim ut, aliquid corporis.
      </div>
      <div className={styles['content-container']}>
        <div></div>
        <div className={styles['option-container']}>
          <Button
            id="edit"
            isIcon
            isCircularIcon
            iconType={ButtonIconType.EDIT}
            className={styles['icon-small']}
          />
          <Button
            id="delete"
            isIcon
            isCircularIcon
            iconType={ButtonIconType.DELETE}
            color={ButtonColor.DANGER}
            className={styles['icon-small']}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
