import { JSX } from 'react';
import styles from './Text.module.css';

interface IPropTypes {
  id: string;
  label?: string;
  className?: string;
  children?: string | JSX.Element;
  isHorizontalWrapper?: boolean;
}

const Text = (props: IPropTypes) => {
  const {
    id,
    label,
    className = '',
    children = '',
    isHorizontalWrapper = false,
  } = props;

  const wrapperClassName = `${styles['text-wrapper']} ${
    isHorizontalWrapper ? styles.horizontal : ''
  }`;

  const textClassName = `text ${className}`;

  return (
    <div className={wrapperClassName}>
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className={textClassName}>{children}</div>
    </div>
  );
};

export default Text;
