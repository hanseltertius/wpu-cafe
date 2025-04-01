import useInputValue from '../../../hooks/useInputValue';
import styles from './Select.module.css';
import { SelectBoxDisplayType } from './Select.constants';

interface IOption {
  value: string;
  name: string;
}

interface IPropTypes {
  id: string;
  options: IOption[];
  label?: string;
  name?: string;
  className?: string;
  displayType?: SelectBoxDisplayType;
  callback?: () => void;
}

const Select = (props: IPropTypes) => {
  const {
    id,
    options,
    label = '',
    name = '',
    className = '',
    displayType = SelectBoxDisplayType.NAME,
    callback = () => {},
  } = props;

  const { inputValue, setInputValue } = useInputValue(callback);

  const selectClassName = `${styles.select} ${className} `;

  const getOptionDisplay = (
    option: IOption,
    displayType: SelectBoxDisplayType,
  ) => {
    switch (displayType) {
      case SelectBoxDisplayType.NAME:
        return option.name;
      case SelectBoxDisplayType.VALUE:
        return option.value;
      case SelectBoxDisplayType.DISPLAY:
        return `${option.value} - ${option.name}`;
      default:
        return option.name;
    }
  };

  return (
    <div className={`${styles['select-wrapper']}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        name={name}
        id={id}
        className={selectClassName}
        value={inputValue}
        onChange={setInputValue}
      >
        {options.map((option: IOption) => (
          <option key={option.value} value={option.value}>
            {getOptionDisplay(option, displayType)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
