import styles from './Input.module.css';
import Button from '../Button';
import { ChangeEvent } from 'react';
import Text from '../Text';
import { ButtonColor } from '../Button/Button.constants';

interface IPropTypes {
  id: string;
  label?: string;
  name?: string;
  type?: string;
  value: string;
  placeholder?: string;
  className?: string;
  isRequired?: boolean;
  isSearch?: boolean;
  isRenderSearch?: boolean;
  width?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchClick?: () => void;
}

const Input = (props: IPropTypes) => {
  const {
    id,
    name,
    label,
    value,
    placeholder,
    className = '',
    type = 'text',
    isRequired = false,
    isRenderSearch = false,
    width = 'auto',
    onChange,
    onSearchClick = () => {},
  } = props;

  const mandatoryBorderClass =
    isRequired && value.length === 0 ? 'mandatory-border' : '';

  const inputClassName = `${mandatoryBorderClass} ${className}`;

  const getErrorMessage = (label?: string) => {
    return label && label.length > 0
      ? `${label} must not be empty`
      : 'Input value must not be empty';
  };

  const errorId = `${id}-error`;

  return (
    <div className={`${styles['input-wrapper']}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className={`${styles['input-content-container']}`}>
        <input
          placeholder={placeholder}
          type={type}
          id={id}
          className={inputClassName}
          name={name}
          value={value}
          style={{ width: width }}
          onChange={onChange}
        ></input>
        {isRenderSearch && (
          <Button
            id="search"
            isIcon
            color={ButtonColor.PRIMARY}
            onClick={onSearchClick}
          />
        )}
      </div>
      {isRequired && value.length === 0 && (
        <Text id={errorId}>{getErrorMessage(label)}</Text>
      )}
    </div>
  );
};

export default Input;
