import { IOrder } from '../../../types/order';
import Text from '../Text';
import styles from './OrderDetailInfo.module.css';

interface IPropTypes {
  id: string;
  orderItem: IOrder;
}

interface IInformation {
  id: string;
  label: string;
  text: string;
}

const OrderDetailInfo = (props: IPropTypes) => {
  const { id, orderItem } = props;

  const informationList: IInformation[] = [
    { id: 'order-id', label: 'Order ID', text: orderItem?.id },
    {
      id: 'order-customer-name',
      label: 'Customer Name',
      text: orderItem?.customer_name,
    },
    {
      id: 'order-table-number',
      label: 'Table Number',
      text: !!orderItem.table_number ? String(orderItem?.table_number) : '',
    },
    { id: 'order-status', label: 'Status', text: orderItem?.status },
    {
      id: 'order-total',
      label: 'Total',
      text: !!orderItem.total ? String(orderItem?.total) : '',
    },
    {
      id: 'order-last-update',
      label: 'Last Update',
      text: !!orderItem?.updated_at ? orderItem?.updated_at : '',
    },
  ];

  return (
    <div id={id} className={styles.container}>
      <div className="grid">
        {informationList.map((info) => {
          return (
            <Text id={info.id} label={info.label} key={info.id}>
              <strong>{info.text}</strong>
            </Text>
          );
        })}
      </div>
    </div>
  );
};

export default OrderDetailInfo;
