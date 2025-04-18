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

const MenuDetail = () => {
  const queryClient = useQueryClient();

  const { id } = useParams();
  const { isDesktop } = useScreenStore();

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
      <header className="layout-header">
        <h1>Menu Detail</h1>
        <Button id="back" onClick={handleBackButton} color={ButtonColor.DANGER}>
          Back
        </Button>
      </header>
      <section className="layout-content horizontal">
        <section className={styles['menu-detail-information-container']}>
          <section className="scroll-wrapper">
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
              iconType={ButtonIconType.REVIEW}
              color={ButtonColor.SECONDARY}
            />
          </div>
        )}
      </section>
    </main>
  );
};

export default MenuDetail;
