import styles from './Button.module.css';

interface IPropTypes {
  id: string;
  children: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'danger';
}

const Button = (props: IPropTypes) => {
  const {
    id,
    children,
    onClick = () => {},
    type = 'button',
    className = '',
    color = 'primary',
  } = props;

  return (
    <button
      id={id}
      onClick={onClick}
      type={type}
      className={`${styles.button} ${className} ${styles[`button-${color}`]}`}
    >
      {children}
    </button>
  );
  //   return <button className={`${styles.button}`}>Test</button>;
};

export default Button;
