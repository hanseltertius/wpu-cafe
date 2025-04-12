import { useNavigate } from 'react-router-dom';
import useScreenStore from '../../../stores/ScreenStore';
import Button from '../../ui/Button';
import { ButtonColor } from '../../ui/Button/Button.constants';
import styles from './MenuList.module.css';
import Select from '../../ui/Select';
import { options } from './MenuList.constants';
import { FormEvent, useState } from 'react';
import useInputValue from '../../../hooks/useInputValue';
import useSelectBoxValue from '../../../hooks/useSelectBoxValue';
import Input from '../../ui/Input';
import { useQuery } from '@tanstack/react-query';
import { getMenus } from '../../../services/menu.service';
import { IMenu } from '../../../types/menu';
import Menu from '../../ui/Menu';
import CustomerInfo from '../../form/CustomerInfo';
import useCartStore from '../../../stores/CartStore';
import Popup from '../../modal/Popup';
import AddToReview from '../../form/AddToReview';
import Loading from '../../ui/Loading';
import useLoadingStore from '../../../stores/LoadingStore';
import AddToCart from '../../form/AddToCart';

const MenuList = () => {
  const { isDesktop } = useScreenStore();
  const { isProcessing } = useLoadingStore();

  const navigate = useNavigate();

  const menuInput = useInputValue('');
  const categoryInput = useSelectBoxValue('All');

  const customerName = useInputValue('');
  const tableNumber = useSelectBoxValue('1');

  const cartStore = useCartStore();

  const [keyword, setKeyword] = useState('');
  const [menuId, setSelectedMenuId] = useState('');
  const [menuName, setMenuName] = useState('');
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isAddToCartOpen, setIsAddToCartOpen] = useState(false);

  const { data } = useQuery({
    queryKey: ['menuList', keyword, categoryInput.selectBoxValue],
    queryFn: () => {
      const categorySearch =
        categoryInput.selectBoxValue === 'All'
          ? ''
          : categoryInput.selectBoxValue;

      return getMenus(1, 25, keyword, categorySearch);
    },
  });

  const handleBackButton = () => {
    navigate('/orders');
  };

  const handleSearch = () => {
    setKeyword(menuInput.inputValue);
  };

  const getMenuList = () => {
    if (!!data) {
      return data.data;
    } else return [];
  };

  const handleEditButton = (id: string) => {
    handleAddToCart(id);
  };

  const handleCreateOrder = (event: FormEvent) => {
    event.preventDefault();

    if (cartStore.carts.length === 0) return;
  };

  const handleAddNewReview = (id: string) => {
    setSelectedMenuId(id);
    setIsReviewOpen(true);
  };

  const handleCloseReview = () => {
    setSelectedMenuId('');
    setIsReviewOpen(false);
  };

  const handleAddToCart = (id: string) => {
    const menu = getMenuList().find((i: IMenu) => i.id === id);

    setMenuName(menu.name);
    setSelectedMenuId(id);
    setIsAddToCartOpen(true);
  };

  const handleCloseAddToCart = () => {
    setMenuName('');
    setSelectedMenuId('');
    setIsAddToCartOpen(false);
  };

  return (
    <main className="layout">
      {isProcessing && <Loading />}
      <header className="layout-header">
        <h1>Menu List</h1>
        <Button id="back" onClick={handleBackButton} color={ButtonColor.DANGER}>
          Back
        </Button>
      </header>
      <section className={styles['layout-content']}>
        <section className={styles['menu-container']}>
          <section className={styles.filter}>
            <Input
              id="orders-search"
              label="Search"
              width="100%"
              value={menuInput.inputValue}
              onChange={menuInput.setInputValue}
              isSearch
              isRenderSearch
              onSearchClick={handleSearch}
            />
            <Select
              id="menu-category-filter"
              label="Category"
              width="100%"
              value={categoryInput.selectBoxValue}
              onChange={categoryInput.setSelectBoxValue}
              options={options}
            />
          </section>
          <section className="scroll-wrapper">
            <section className="grid">
              {getMenuList().map((item: IMenu) => (
                <div key={item.id}>
                  <Menu
                    menu={item}
                    handleAddNewReview={handleAddNewReview}
                    handleAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </section>
          </section>
        </section>
        {isDesktop && (
          <aside className={styles['customer-info']}>
            <CustomerInfo
              id="customer-info-non-popup"
              customerName={customerName.inputValue}
              tableNumber={tableNumber.selectBoxValue}
              cartList={cartStore.carts}
              onCustomerNameChange={customerName.setInputValue}
              onTableNumberChange={tableNumber.setSelectBoxValue}
              handleEditButton={handleEditButton}
              handleCreateOrder={handleCreateOrder}
            />
          </aside>
        )}
      </section>
      {!isDesktop && (
        <div className="bottom-button-container">
          <div>Test</div>
        </div>
      )}
      <Popup
        isOpen={isReviewOpen}
        title="Add New Review"
        width="500px"
        height="500px"
        handleClose={handleCloseReview}
      >
        <AddToReview
          id="add-to-review"
          menuItemId={menuId}
          handleClosePopup={handleCloseReview}
        />
      </Popup>

      <Popup
        isOpen={isAddToCartOpen}
        title="Add to Cart"
        width="500px"
        height="500px"
        handleClose={handleCloseAddToCart}
      >
        <AddToCart
          id="add-to-cart"
          menuItemId={menuId}
          name={menuName}
          handleClosePopup={handleCloseAddToCart}
        />
      </Popup>
    </main>
  );
};

export default MenuList;
