import { create } from 'zustand';

interface ScreenStore {
  isMobile: boolean;
  setIsMobile: (matches: boolean) => void;
}

const useScreenStore = create<ScreenStore>((set) => ({
  isMobile: false,
  setIsMobile: (matches: boolean) => {
    set(() => ({ isMobile: matches }));
  },
}));

export default useScreenStore;
