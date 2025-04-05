import { OrbitProgress } from 'react-loading-indicators';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.container}>
      <OrbitProgress />
    </div>
  );
};

export default Loading;
