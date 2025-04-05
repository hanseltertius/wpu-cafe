import { OrbitProgress } from 'react-loading-indicators';
import styles from './Loading.module.css';

interface IPropTypes {
  isTransparent?: boolean;
}

const Loading = (props: IPropTypes) => {
  const { isTransparent = false } = props;

  const loadingClassName = `${styles.container} ${
    isTransparent ? styles.transparent : ''
  }`;

  return (
    <div className={loadingClassName}>
      <OrbitProgress />
    </div>
  );
};

export default Loading;
