import styles from './Input.module.css';
import useInputValue from '../../../hooks/useInputValue';

interface IPropTypes {
  id: string;
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  isSearch?: boolean;
}

const Input = (props: IPropTypes) => {
  const {
    id,
    name,
    label,
    placeholder,
    className,
    type = 'text',
    required = false,
  } = props;

  const { inputValue, setInputValue } = useInputValue();

  return (
    <div className={`${styles['input-wrapper']}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        placeholder={placeholder}
        type={type}
        id={id}
        className={`${styles.input} ${
          required && inputValue.length === 0 ? styles['mandatory-border'] : ''
        } ${className} `}
        name={name}
        value={inputValue}
        onChange={setInputValue}
      ></input>
      {required && inputValue.length > 0 ? (
        ''
      ) : (
        <div className={styles['error-input']}>
          {required && label && label.length > 0
            ? `${label} must not be empty`
            : 'Input value must not be empty'}
        </div>
      )}
    </div>
  );
};

export default Input;
