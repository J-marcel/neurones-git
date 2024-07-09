import { create } from 'zustand';
import { persist } from 'zustand/middleware';

let AppStore = (set) => ({
    dopen: true,
    updateOpen: (dopen) => set((state) => ({ dopen: dopen })),


});

AppStore = persist(AppStore, {
    name: 'AppStore',
});

export const useAppStore = create(AppStore);