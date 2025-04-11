import { FormEvent } from 'react';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import styles from './Login.module.css';
import { login } from '../../../services/auth.service';
import { setLocalStorage } from '../../../utils/storage';
import { useNavigate } from 'react-router-dom';
import useInputValue from '../../../hooks/useInputValue';

const Login = () => {
  const navigate = useNavigate();

  const email = useInputValue('');
  const password = useInputValue('');

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    const payload = {
      email: email.inputValue,
      password: password.inputValue,
    };
    const result = await login(payload);
    setLocalStorage('auth', result.token);

    return navigate('/orders');
  };

  return (
    <main className={styles.login}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form} onSubmit={handleLogin}>
          <Input
            label="Email"
            name="email"
            width="100%"
            id="email"
            type="email"
            placeholder="Insert Email"
            isRequired
            value={email.inputValue}
            onChange={email.setInputValue}
          />
          <Input
            label="Password"
            name="password"
            width="100%"
            id="password"
            type="password"
            placeholder="Insert Password"
            isRequired
            value={password.inputValue}
            onChange={password.setInputValue}
          />
          <Button id="login" type="submit">
            Login
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Login;
