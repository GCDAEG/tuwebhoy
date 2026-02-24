import { create } from "zustand";

type LayoutState = {
  navbarHeight: number;
  setNavbarHeight: (height: number) => void;
};

export const useLayoutStore = create<LayoutState>((set) => ({
  navbarHeight: 56, // valor por defecto
  setNavbarHeight: (height) => set({ navbarHeight: height }),
}));
