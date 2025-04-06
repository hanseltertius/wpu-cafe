import styles from './Input.module.css';
import Error from '../Error';
import Button from '../Button';
import { ChangeEvent } from 'react';

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
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isRenderSearch?: boolean;
}

const Input = (props: IPropTypes) => {
  const {
    id,
    name,
    label,
    value,
    placeholder,
    className,
    type = 'text',
    isRequired = false,
    isRenderSearch = false,
    onChange,
  } = props;

  const inputClassName = `${styles.input} ${
    isRequired && value.length === 0 ? styles['mandatory-border'] : ''
  } ${className}`;

  const getErrorMessage = (label?: string) => {
    return label && label.length > 0
      ? `${label} must not be empty`
      : 'Input value must not be empty';
  };

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
          onChange={onChange}
        ></input>
        {isRenderSearch && <Button id="search" isIcon isCircularIcon />}
      </div>
      {isRequired && value.length === 0 && (
        <Error message={getErrorMessage(label)} />
      )}
    </div>
  );
};

export default Input;
