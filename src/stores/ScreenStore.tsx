import { create } from 'zustand';

interface ScreenStore {
  isDesktop: boolean;
  setIsDesktop: (matches: boolean) => void;
}

const isInitialDesktop =
  typeof window !== 'undefined'
    ? window.matchMedia('(min-width: 1024px)').matches
    : false;

const useScreenStore = create<ScreenStore>((set) => ({
  isDesktop: isInitialDesktop,
  setIsDesktop: (matches: boolean) => {
    set(() => ({ isDesktop: matches }));
  },
}));

export default useScreenStore;
