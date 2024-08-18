import { create } from 'zustand';

interface StoreState {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;

  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const useStore = create<StoreState>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),

  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useStore;
