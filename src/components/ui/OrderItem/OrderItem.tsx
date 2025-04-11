import { ICart } from '../../../types/cart';
import styles from './OrderItem.module.css';

interface IPropTypes {
  item: ICart;
}

const OrderItem = (props: IPropTypes) => {
  const { item } = props;

  return (
    <div className={styles.container} key={item.menuItem?.id}>
      <img
        src={item.menuItem?.image_url}
        alt={item.menuItem?.name}
        className={styles.image}
      />
      <div className={styles.content}>
        <div className={styles.item}>
          <h2>{item.menuItem?.name}</h2>
          <div>Qty: {item.quantity}</div>
        </div>
        <h3>${item.menuItem?.price}</h3>
        <div>{item.notes}</div>
      </div>
    </div>
  );
};

export default OrderItem;
