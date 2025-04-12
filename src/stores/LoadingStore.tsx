import { create } from 'zustand';

interface LoadingStore {
  isProcessing: boolean;
  setIsProcessing: (isProcessing: boolean) => void;
}

const useLoadingStore = create<LoadingStore>((set, _) => ({
  isProcessing: false,
  setIsProcessing: (isProcessing) => {
    set({ isProcessing: isProcessing });
  },
}));

export default useLoadingStore;
