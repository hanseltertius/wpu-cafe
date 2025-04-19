import { useNavigate, useParams } from 'react-router-dom';
import useScreenStore from '../../../stores/ScreenStore';
import Button from '../../ui/Button';
import { ButtonColor, ButtonIconType } from '../../ui/Button/Button.constants';
import styles from './OrderDetail.module.css';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getOrderDetail } from '../../../services/order.service';
import OrderDetailInfo from '../../ui/OrderDetailInfo';
import Loading from '../../ui/Loading';
import OrderItem from '../../ui/OrderItem';
import { ICart } from '../../../types/cart';
import { useEffect } from 'react';
import useBottomModalStore from '../../../stores/BottomModalStore';
import BottomModal from '../../modal/BottomModal';

const OrderDetail = () => {
  const queryClient = useQueryClient();

  const { id } = useParams();
  const { isDesktop } = useScreenStore();

  const { setIsBottomModalOpen } = useBottomModalStore();

  const orderId = !!id ? id : '0';

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries({ queryKey: ['orderDetail'] });
    };
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ['orderDetail', orderId],
    queryFn: () => getOrderDetail(orderId),
    staleTime: 0,
  });

  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate('/orders');
  };

  const getOrderDetailData = () => {
    return !!data ? data : {};
  };

  const getOrderDetailCart = () => {
    const orderDetail = getOrderDetailData();
    return !!orderDetail.cart ? orderDetail.cart : [];
  };

  return (
    <main className="layout">
      {isLoading && <Loading />}
      <header className="layout-header">
        <h1>Order Detail</h1>
        <Button id="back" onClick={handleBackButton} color={ButtonColor.DANGER}>
          Back
        </Button>
      </header>
      <section className="layout-content">
        {isDesktop && (
          <section className={styles['order-detail-information-container']}>
            <section className="scroll-wrapper">
              <OrderDetailInfo
                id={`order-detail-${orderId}`}
                orderItem={getOrderDetailData()}
              />
            </section>
          </section>
        )}
        <section className={styles['order-detail-menus-container']}>
          <section className="scroll-wrapper">
            <section className="grid">
              {getOrderDetailCart().map((item: ICart) => (
                <OrderItem
                  item={item}
                  key={!!item.menuItem ? item.menuItem?.id : 'default-key'}
                />
              ))}
            </section>
          </section>
        </section>
        {!isDesktop && (
          <div className="bottom-button-container">
            <Button
              id="open-order-info"
              isIcon
              isCircularIcon
              onClick={() => setIsBottomModalOpen(true)}
              color={ButtonColor.SECONDARY}
              iconType={ButtonIconType.INFO}
            />
          </div>
        )}

        <BottomModal title="Customer Information" height="40vh">
          <section className={styles['order-detail-information-container']}>
            <section className="scroll-wrapper">
              <OrderDetailInfo
                id={`order-detail-${orderId}`}
                orderItem={getOrderDetailData()}
              />
            </section>
          </section>
        </BottomModal>
      </section>
    </main>
  );
};

export default OrderDetail;
