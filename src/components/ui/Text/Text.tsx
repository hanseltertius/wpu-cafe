import { JSX } from 'react';
import styles from './Text.module.css';

interface IPropTypes {
  id: string;
  label?: string;
  children?: string | JSX.Element;
  isHorizontalWrapper?: boolean;
}

const Text = (props: IPropTypes) => {
  const { id, label, children = '', isHorizontalWrapper = false } = props;

  const wrapperClassName = `${styles['text-wrapper']} ${
    isHorizontalWrapper ? styles.horizontal : ''
  }`;

  return (
    <div className={wrapperClassName}>
      {label && <label htmlFor={id}>{label}</label>}
      <p className={styles.text}>{children}</p>
    </div>
  );
};

export default Text;
