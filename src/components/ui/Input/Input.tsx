import styles from './Input.module.css';
import useInputValue from '../../../hooks/useInputValue';
import Error from '../Error';

interface IPropTypes {
  id: string;
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  isRequired?: boolean;
  isSearch?: boolean;
  callback?: () => void;
}

const Input = (props: IPropTypes) => {
  const {
    id,
    name,
    label,
    placeholder,
    className,
    type = 'text',
    isRequired = false,
    callback = () => {},
  } = props;

  const { inputValue, setInputValue } = useInputValue(callback);

  const inputClassName = `${styles.input} ${
    isRequired && inputValue.length === 0 ? styles['mandatory-border'] : ''
  } ${className}`;

  const getErrorMessage = (label?: string) => {
    return label && label.length > 0
      ? `${label} must not be empty`
      : 'Input value must not be empty';
  };

  return (
    <div className={`${styles['input-wrapper']}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        placeholder={placeholder}
        type={type}
        id={id}
        className={inputClassName}
        name={name}
        value={inputValue}
        onChange={setInputValue}
      ></input>
      {isRequired && inputValue.length === 0 && (
        <Error message={getErrorMessage(label)} />
      )}
    </div>
  );
};

export default Input;
