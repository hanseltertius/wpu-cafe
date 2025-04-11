import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Button from '../../ui/Button';
import { ButtonColor } from '../../ui/Button/Button.constants';

const Home = () => {
  return (
    <main className={styles.home}>
      <h1>Welcome To WPU Cafe</h1>
      <Link to="/login">
        <Button id="login" color={ButtonColor.PRIMARY}>
          Login
        </Button>
      </Link>
    </main>
  );

  // bikin layout nya
  return <div>Test</div>;
};

export default Home;
