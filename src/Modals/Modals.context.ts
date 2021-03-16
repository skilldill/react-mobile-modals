import { createContext, ReactNode } from "react";

export enum ModalDirectionNames {
    horizontal = "horizontal", 
    vertical = "vertical"
}

export interface ModalProps {
    component: ReactNode,
    openDirection?: ModalDirectionNames,
    closed?: boolean
}

export interface ModalContextModel {
    modals: ModalProps[],
    openModal: (modal: ModalProps) => void,
    closeModal: () => void
}

export const ModalsContext = createContext<ModalContextModel>({
    modals: [],
    openModal: () => {},
    closeModal: () => {}
})