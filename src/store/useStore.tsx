import { create } from 'zustand';

interface StoreState {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useStore = create<StoreState>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export default useStore;
