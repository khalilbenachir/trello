import { create } from "zustand";

type IProps = {
  open: boolean;
  setOpen: () => void;
  setClose: () => void;
};

export const useSideMenuMobile = create<IProps>((set) => ({
  open: false,
  setOpen: () => set({ open: true }),
  setClose: () => set({ open: false }),
}));
