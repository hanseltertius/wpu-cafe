import {
  FaBars,
  FaCheck,
  FaCommentAlt,
  FaEdit,
  FaExternalLinkAlt,
  FaMinus,
  FaPlus,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaTrashAlt,
} from 'react-icons/fa';
import { ButtonColor, ButtonIconType } from './Button.constants';
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
  width?: string;
}

const Button = (props: IPropTypes) => {
  const {
    id,
    children = '',
    onClick = () => {},
    type = 'button',
    className = '',
    color = ButtonColor.PLAIN,
    isIcon = false,
    iconType = ButtonIconType.SEARCH,
    isCircularIcon = false,
    width = 'auto',
  } = props;

  let buttonClassName = `${className}`;
  let style = {};

  if (isIcon) {
    buttonClassName += ' icon';
    if (isCircularIcon) buttonClassName += ' circular';
  } else {
    style = { width: width };
  }

  buttonClassName += ` ${color}`;

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
      case ButtonIconType.CLOSE:
        return <FaTimes />;
      case ButtonIconType.HAMBURGER:
        return <FaBars />;
      default:
        return <FaSearch />;
    }
  };

  return (
    <button
      id={id}
      onClick={onClick}
      type={type}
      className={buttonClassName}
      style={style}
    >
      {isIcon ? renderIconButton(iconType) : children}
    </button>
  );
};

export default Button;
