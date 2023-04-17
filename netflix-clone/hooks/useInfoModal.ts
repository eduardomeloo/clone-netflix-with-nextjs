import { create } from 'zustand';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

export interface ModalStoreInterface {
    movieId?: string,
    isOpen: boolean,
    openModal: (movieId: string) => void;
    closeModal: () => void;
};

const useInfoModel = create<ModalStoreInterface>((set) => ({
    movieId: undefined,
    isOpen: false,
    openModal: (movieId: string) => set({ isOpen: true, movieId }),
    closeModal: () => set({ isOpen: false, movieId: undefined })
}));

export default useInfoModel;