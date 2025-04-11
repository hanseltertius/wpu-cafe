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

const MenuList = () => {
  const { isDesktop } = useScreenStore();

  const navigate = useNavigate();

  const menuInput = useInputValue('');
  const categoryInput = useSelectBoxValue('All');

  const customerName = useInputValue('');
  const tableNumber = useSelectBoxValue('1');

  const [isProcessingData, setIsProcessingData] = useState(false);

  const cartStore = useCartStore();

  const [keyword, setKeyword] = useState('');

  const { data } = useQuery({
    queryKey: ['menuList', keyword, categoryInput.selectBoxValue],
    queryFn: () =>
      getMenus(
        1,
        25,
        keyword,
        categoryInput.selectBoxValue === 'All'
          ? ''
          : categoryInput.selectBoxValue,
      ),
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

  const handlePlusButton = () => {};

  const handleMinusButton = () => {};

  const handleEditButton = () => {};

  const handleDeleteButton = () => {};

  const handleCreateOrder = (event: FormEvent) => {
    event.preventDefault();

    if (cartStore.carts.length === 0) return;
  };

  return (
    <main className="layout">
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
                  <Menu menu={item} />
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
              handlePlusButton={handlePlusButton}
              handleMinusButton={handleMinusButton}
              handleEditButton={handleEditButton}
              handleDeleteButton={handleDeleteButton}
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
    </main>
  );
};

export default MenuList;
