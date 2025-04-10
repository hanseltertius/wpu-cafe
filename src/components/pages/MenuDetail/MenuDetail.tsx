import { useNavigate, useParams } from 'react-router-dom';
import useScreenStore from '../../../stores/ScreenStore';
import styles from './MenuDetail.module.css';
import { ButtonColor } from '../../ui/Button/Button.constants';
import Button from '../../ui/Button';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getMenuDetail } from '../../../services/menu.service';
import { useEffect } from 'react';
import Loading from '../../ui/Loading';
import { IReview } from '../../../types/review';
import Review from '../../ui/Review';

const MenuDetail = () => {
  const queryClient = useQueryClient();

  const { id } = useParams();
  const { isDesktop } = useScreenStore();

  const menuId = !!id ? id : '0';

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries({ queryKey: ['orderDetail'] });
    };
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ['orderDetail', menuId],
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

    if (!!menuDetail) {
      const reviews = menuDetail.reviews;
      if (!!reviews) return !!reviews.items ? reviews.items : [];
    } else return [];
  };

  return (
    <main className="layout">
      {isLoading && <Loading />}
      <header className="layout-header">
        <h1>Menu Detail</h1>
        <Button id="back" onClick={handleBackButton} color={ButtonColor.DANGER}>
          Back
        </Button>
      </header>
      <section className="layout-content">
        <section className={styles['menu-detail-information-container']}>
          <div></div>
          <section className="scroll-wrapper">
            <section className={styles['menu-detail-information']}>
              {!!data && !!data.menuItem && (
                <div className={styles['menu-detail-content']}>
                  <img src={data.menuItem.image_url} className={styles.image} />
                  <h2>{data.menuItem.name}</h2>
                  <div>{data.menuItem.description}</div>
                  <div>${data.menuItem.price}</div>
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
                  <Review review={item} />
                ))}
              </section>
            </section>
          </section>
        )}
        {!isDesktop && (
          <div className="bottom-button-container">
            <div>Test</div>
          </div>
        )}
      </section>
    </main>
  );
};

export default MenuDetail;
