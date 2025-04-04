import styles from './Text.module.css';

interface IPropTypes {
  id: string;
  text: string;
  label?: string;
  isBoldText?: boolean;
  isHorizontalWrapper?: boolean;
}

const Text = (props: IPropTypes) => {
  const {
    id,
    text,
    label,
    isBoldText = false,
    isHorizontalWrapper = false,
  } = props;

  const wrapperClassName = `${styles['text-wrapper']} ${
    isHorizontalWrapper ? styles.horizontal : ''
  }`;
  const textClassName = `${styles.text} ${isBoldText ? styles.bold : ''}`;

  return (
    <div className={wrapperClassName}>
      {label && <label htmlFor={id}>{label}</label>}
      <p className={textClassName}>{text}</p>
    </div>
  );
};

export default Text;
