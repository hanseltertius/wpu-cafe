import { IMenu } from '../../../types/menu';
import Button from '../Button';
import { ButtonColor, ButtonIconType } from '../Button/Button.constants';
import Text from '../Text';
import styles from './Menu.module.css';

interface IPropTypes {
  menu: IMenu;
  handleAddToCart?: (id: string, name: string) => void;
  handleAddNewReview?: (id: string) => void;
  handleClickMenu?: (id: string) => void;
}

const Menu = (props: IPropTypes) => {
  const { menu, handleAddToCart, handleAddNewReview, handleClickMenu } = props;

  return (
    <div className="card-item" key={menu.id}>
      <img src={menu.image_url} alt={menu.name} className={styles.image} />
      <div className="card-item-content-wrapper">
        <div className="card-item-content-container">
          <Text id={`menu-name-${menu.id}`} className="card-item-title">
            {menu.name}
          </Text>
          <div className={styles['bottom-container']}>
            <Text id={`menu-price-${menu.id}`} className="card-item-subtitle">
              <div>${menu.price}</div>
            </Text>
            <div className={styles['bottom-button-container']}>
              <Button
                id={`cart-${menu.id}`}
                onClick={() => {
                  if (!!handleAddToCart) handleAddToCart(menu.id, menu.name);
                }}
                isIcon
                iconType={ButtonIconType.CART}
                isCircularIcon
                color={ButtonColor.PRIMARY}
              />
              <Button
                id={`review-${menu.id}`}
                onClick={() => {
                  if (!!handleAddNewReview) handleAddNewReview(menu.id);
                }}
                isIcon
                iconType={ButtonIconType.REVIEW}
                isCircularIcon
                color={ButtonColor.SECONDARY}
              />
              <Button
                id={`detail-${menu.id}`}
                onClick={() => {
                  if (!!handleClickMenu) handleClickMenu(menu.id);
                }}
                isIcon
                iconType={ButtonIconType.REDIRECT}
                isCircularIcon
                color={ButtonColor.TERTIARY}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
