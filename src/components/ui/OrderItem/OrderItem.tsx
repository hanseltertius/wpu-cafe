import { ICart } from '../../../types/cart';
import Text from '../Text';
import styles from './OrderItem.module.css';

interface IPropTypes {
  item: ICart;
}

const OrderItem = (props: IPropTypes) => {
  const { item } = props;

  // TODO : restyle the layout
  return (
    <div className="card-item">
      <div className="card-item-content-wrapper">
        <div className="card-item-content-container">
          <div className={styles.container} key={item.menuItem?.id}>
            <img
              src={item.menuItem?.image_url}
              alt={item.menuItem?.name}
              className={styles.image}
            />
            <div className="card-item-content-container">
              <Text
                id={`menu-name-${item.id}-${item.menuItem?.id}`}
                className="card-item-title"
              >
                {item.menuItem?.name}
              </Text>
              <div className={styles['card-item-price-container']}>
                <Text
                  id={`menu-price-${item.id}-${item.menuItem?.id}`}
                  className="card-item-subtitle"
                >
                  <div>${item.menuItem?.price}</div>
                </Text>
                <Text id={`menu-quantity-${item.id}-${item.menuItem?.id}`}>
                  <div>Qty: {item.quantity}</div>
                </Text>
              </div>
            </div>
          </div>
          {!!item.notes && (
            <div className="card-item-note-container">{item.notes}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
