import { IMenu } from '../../../types/menu';
import Button from '../Button';
import { ButtonColor, ButtonIconType } from '../Button/Button.constants';
import styles from './Menu.module.css';

interface IPropTypes {
  menu: IMenu;
}

const Menu = (props: IPropTypes) => {
  const { menu } = props;

  return (
    <div className={styles.item} key={menu.id}>
      <img src={menu.image_url} alt={menu.name} className={styles.image} />
      <div className={styles.content}>
        <h3>{menu.name}</h3>
        <div className={styles['bottom-container']}>
          <div>${menu.price}</div>
          <div className={styles['bottom-button-container']}>
            <Button
              id={`cart-${menu.id}`}
              onClick={() => console.log('add to cart')}
              isIcon
              iconType={ButtonIconType.CART}
              isCircularIcon
            />
            <Button
              id={`review-${menu.id}`}
              onClick={() => console.log('add a new review')}
              isIcon
              iconType={ButtonIconType.REVIEW}
              isCircularIcon
              color={ButtonColor.SECONDARY}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
