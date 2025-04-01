import styles from './Error.module.css';

interface IPropTypes {
  message?: string;
}

const Error = (props: IPropTypes) => {
  const { message = 'Input value must not be empty' } = props;
  return <div className={styles.error}>{message}</div>;
};

export default Error;
