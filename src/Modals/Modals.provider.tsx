import React, { FC, useMemo, useState } from "react";

import { ModalsContext, ModalProps } from "./Modals.context";
import { Modal } from "./Modal";

enum ModalsContextModeNames {
  close,
  open,
}

export const ModalsProvider: FC = ({ children }) => {
  const [modals, setModals] = useState<any>([]);
  const [mode, setMode] = useState<ModalsContextModeNames>(
    ModalsContextModeNames.open
  );

  const openModal = (modal: ModalProps) => {
    setMode(ModalsContextModeNames.open);
    setModals([...modals, modal]);
  };

  const closeModal = () => {
    const lastModal = modals[modals.length - 1];
    const openedModals = modals.filter(
      (modal: ModalProps, i: number) => {
        console.log(modal);
        return i !== modals.length - 1
      }
    );

    setModals([...openedModals, { ...lastModal, closed: true }]);

    const timeout = setTimeout(() => {
      setMode(ModalsContextModeNames.close);
      setModals(openedModals);
      clearTimeout(timeout);
    }, 300);
  };

  const openedModals = useMemo(
    () => (
      <React.Fragment>
        {!!modals.length &&
          (modals as ModalProps[]).map((modal, i) => (
            <Modal 
              show={i === modals.length - 1 &&
                mode === ModalsContextModeNames.open &&
                !modal.closed}
              close={!!modal.closed}
              index={i}
              key={i}
              onClose={closeModal}
            >{modal.component}</Modal>
          ))}
      </React.Fragment>
    ),
    [modals, mode]
  );

  const values = {
    modals,
    openModal,
    closeModal,
  };

  return (
    <ModalsContext.Provider value={values}>
      <div className="modals">
        {children}
        {openedModals}
      </div>
    </ModalsContext.Provider>
  );
};
