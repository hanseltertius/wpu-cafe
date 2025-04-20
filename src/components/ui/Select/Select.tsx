import styles from './Select.module.css';
import { SelectBoxDisplayType } from './Select.constants';
import { IOption } from '../../../types/option';
import { ChangeEvent } from 'react';

interface IPropTypes {
  id: string;
  options: IOption[];
  label?: string;
  name?: string;
  value: string;
  className?: string;
  displayType?: SelectBoxDisplayType;
  width?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select = (props: IPropTypes) => {
  const {
    id,
    options,
    label = '',
    value,
    name = '',
    className = '',
    width = 'auto',
    onChange = () => {},
    displayType = SelectBoxDisplayType.NAME,
  } = props;

  const selectClassName = `select ${className}`;

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
    <div className="select-container">
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        name={name}
        id={id}
        className={selectClassName}
        value={value}
        style={{ width: width }}
        onChange={onChange}
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
