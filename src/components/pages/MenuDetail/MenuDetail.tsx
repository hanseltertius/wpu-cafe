import { useNavigate, useParams } from 'react-router-dom';
import useScreenStore from '../../../stores/ScreenStore';
import styles from './MenuDetail.module.css';
import { ButtonColor, ButtonIconType } from '../../ui/Button/Button.constants';
import Button from '../../ui/Button';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getMenuDetail } from '../../../services/menu.service';
import { useEffect } from 'react';
import Loading from '../../ui/Loading';
import { IReview } from '../../../types/review';
import Review from '../../ui/Review';
import BottomModal from '../../modal/BottomModal';
import useBottomModalStore from '../../../stores/BottomModalStore';
import Text from '../../ui/Text';

const MenuDetail = () => {
  const queryClient = useQueryClient();

  const { id } = useParams();
  const { isDesktop } = useScreenStore();

  const { setIsBottomModalOpen } = useBottomModalStore();

  const menuId = !!id ? id : '0';

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries({ queryKey: ['menuDetail'] });
    };
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ['menuDetail', menuId],
    queryFn: () => getMenuDetail(menuId),
    staleTime: 0,
  });

  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate('/menus');
  };

  const getMenuDetailData = () => {
    return !!data ? data : {};
  };

  const getMenuDetailReviews = () => {
    const menuDetail = getMenuDetailData();

    return menuDetail?.reviews?.items ?? [];
  };

  return (
    <main className="layout">
      {isLoading && <Loading />}
      <header className="header">
        <h1>Menu Detail</h1>
        <Button id="back" onClick={handleBackButton} color={ButtonColor.DANGER}>
          Back
        </Button>
      </header>
      <section className="content horizontal">
        <section className={styles['menu-detail-information-container']}>
          <section className="card-item" style={{ height: '100%' }}>
            <section className="card-scroll-wrapper">
              {!!data && !!data.menuItem && (
                <div className={styles['menu-detail-information']}>
                  <img src={data.menuItem.image_url} className={styles.image} />
                  <div className={styles['menu-detail-content']}>
                    <Text
                      id={`${data.menuItem.id}-title`}
                      className="card-item-title"
                    >
                      {data.menuItem.name}
                    </Text>
                    <Text
                      id={`${data.menuItem.id}-price`}
                      className="card-item-subtitle"
                    >
                      <div>${data.menuItem.price}</div>
                    </Text>
                    <div>{data.menuItem.description}</div>
                  </div>
                </div>
              )}
            </section>
          </section>
        </section>
        {isDesktop && (
          <section className={styles['menu-detail-reviews-container']}>
            <h2>Reviews</h2>
            <section className="scroll-wrapper">
              <section className={styles['menu-detail-reviews']}>
                {getMenuDetailReviews().map((item: IReview) => (
                  <div key={item.id}>
                    <Review review={item} />
                  </div>
                ))}
              </section>
            </section>
          </section>
        )}
        {!isDesktop && (
          <div className="bottom-button-container">
            <Button
              id="open-reviews"
              isIcon
              isCircularIcon
              onClick={() => setIsBottomModalOpen(true)}
              iconType={ButtonIconType.REVIEW}
              color={ButtonColor.SECONDARY}
            />
          </div>
        )}

        <BottomModal title="Reviews" height="70vh">
          <section className="scroll-wrapper">
            <section className={styles['menu-detail-reviews']}>
              {getMenuDetailReviews().map((item: IReview) => (
                <div key={item.id}>
                  <Review review={item} />
                </div>
              ))}
            </section>
          </section>
        </BottomModal>
      </section>
    </main>
  );
};

export default MenuDetail;
