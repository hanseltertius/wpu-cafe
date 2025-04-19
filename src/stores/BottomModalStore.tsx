import { create } from 'zustand';

interface BottomModalStore {
  isBottomModalOpen: boolean;
  setIsBottomModalOpen: (isBottomModalOpen: boolean) => void;
}

const useBottomModalStore = create<BottomModalStore>((set, _) => ({
  isBottomModalOpen: false,
  setIsBottomModalOpen: (isBottomModalOpen) => {
    set({ isBottomModalOpen: isBottomModalOpen });
  },
}));

export default useBottomModalStore;
