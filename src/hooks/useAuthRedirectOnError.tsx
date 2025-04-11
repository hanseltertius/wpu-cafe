import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeLocalStorage } from '../utils/storage';

export const useAuthRedirectOnError = (isError: boolean, error: unknown) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      if ((error as Error).message === 'Unauthorized') {
        removeLocalStorage('auth');
        navigate('/login');
      }
    }
  }, [isError, error, navigate]);
};
