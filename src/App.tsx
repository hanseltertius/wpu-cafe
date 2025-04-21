import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import useScreenStore from './stores/ScreenStore';
import useBottomModalStore from './stores/BottomModalStore';

const queryClient = new QueryClient();

function App() {
  const { setIsDesktop } = useScreenStore();
  const { setIsBottomModalOpen } = useBottomModalStore();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleChange = (event: MediaQueryListEvent) => {
      const isMatchDesktop = event.matches;
      setIsDesktop(isMatchDesktop);
      if (isMatchDesktop) setIsBottomModalOpen(false);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </QueryClientProvider>
  );
}

export default App;
