import {
  FaCheck,
  FaCommentAlt,
  FaEdit,
  FaExternalLinkAlt,
  FaMinus,
  FaPlus,
  FaSearch,
  FaShoppingCart,
  FaTrashAlt,
} from 'react-icons/fa';
import { ButtonColor, ButtonIconType } from './Button.constants';
import styles from './Button.module.css';
import { JSX } from 'react';

interface IPropTypes {
  id: string;
  children?: string | JSX.Element;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  color?: ButtonColor;
  isIcon?: boolean;
  iconType?: ButtonIconType;
  isCircularIcon?: boolean;
}

const Button = (props: IPropTypes) => {
  const {
    id,
    children = '',
    onClick = () => {},
    type = 'button',
    className = '',
    color = ButtonColor.PRIMARY,
    isIcon = false,
    iconType = ButtonIconType.SEARCH,
    isCircularIcon = false,
  } = props;

  const buttonClassName = isIcon
    ? `${styles['button-icon']} ${styles[`button-${color}`]} ${
        isCircularIcon ? styles.circular : ''
      } ${className}`
    : `${styles.button} ${className} ${styles[`button-${color}`]}`;

  const renderIconButton = (type: ButtonIconType) => {
    switch (type) {
      case ButtonIconType.SEARCH:
        return <FaSearch />;
      case ButtonIconType.PLUS:
        return <FaPlus />;
      case ButtonIconType.MINUS:
        return <FaMinus />;
      case ButtonIconType.EDIT:
        return <FaEdit />;
      case ButtonIconType.DELETE:
        return <FaTrashAlt />;
      case ButtonIconType.COMPLETE:
        return <FaCheck />;
      case ButtonIconType.REDIRECT:
        return <FaExternalLinkAlt />;
      case ButtonIconType.CART:
        return <FaShoppingCart />;
      case ButtonIconType.REVIEW:
        return <FaCommentAlt />;
      default:
        return <FaSearch />;
    }
  };

  return (
    <button id={id} onClick={onClick} type={type} className={buttonClassName}>
      {isIcon ? renderIconButton(iconType) : children}
    </button>
  );
};

export default Button;
