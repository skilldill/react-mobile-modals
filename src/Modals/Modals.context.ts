import { createContext, ReactNode } from 'react';

export type ModalDirectionTypes = 'horizontal' | 'vertical';

export type ModalProps = {
  component: ReactNode;
  openDirection?: ModalDirectionTypes;
  closed?: boolean;
};

export type ModalContextModel = {
  modals: ModalProps[];
  openModal: (modal: ModalProps) => void;
  closeModal: () => void;
};

export const ModalsContext = createContext<ModalContextModel>({
  modals: [],
  openModal: () => {},
  closeModal: () => {},
});
