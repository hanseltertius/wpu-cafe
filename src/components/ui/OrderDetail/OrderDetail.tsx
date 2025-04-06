import { IOrder } from '../../../types/order';
import Text from '../Text';
import styles from './OrderDetail.module.css';

interface IPropTypes {
  id: string;
  orderItem: IOrder;
}

const OrderDetail = (props: IPropTypes) => {
  const { id, orderItem } = props;

  const informations = [
    { id: 'order-id', label: 'Order ID', text: orderItem.id },
    {
      id: 'order-customer-name',
      label: 'Customer Name',
      text: orderItem.customer_name,
    },
    {
      id: 'order-table-number',
      label: 'Table Number',
      text: String(orderItem.table_number),
    },
    { id: 'order-status', label: 'Status', text: orderItem.status },
    { id: 'order-total', label: 'Total', text: String(orderItem.total) },
  ];

  /**
   * Container : bakal pake grid, dimana kita bisa display 3 (untuk web), 2 (untuk tablet) 1 (untuk mobile)
   * di dalam container itu ada label component (dimana kita itu bisa pake title)
   */
  const updatedAt: string = !!orderItem?.updated_at
    ? orderItem?.updated_at
    : '';

  return (
    <div id={id} className={styles.container}>
      <div className={styles['info-container']}>
        {informations.map((info) => {
          return (
            <Text id={info.id} label={info.label}>
              <strong>{info.text}</strong>
            </Text>
          );
        })}
      </div>
      <Text id="last-update" label="Last Update: " isHorizontalWrapper>
        {updatedAt}
      </Text>
    </div>
  );
};

export default OrderDetail;
