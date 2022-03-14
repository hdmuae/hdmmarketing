import create from "zustand";

const useStore = create((set: any) => ({
  modal: false,
  toggleModal: () => set((state: any) => ({ modal: !state.modal })),
}));

export default useStore;
