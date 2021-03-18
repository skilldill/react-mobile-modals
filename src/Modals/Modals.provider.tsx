import React, { FC, useMemo, useState } from "react";

import modalClasses from "../styles.module.css";
import { ModalsContext, ModalProps } from "./Modals.context";
import { Modal } from "./Modal";

enum ModalsContextModeNames {
  close,
  open,
}

export const ModalsProvider: FC = ({ children }) => {
  const [modals, setModals] = useState<ModalProps[]>([]);
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
      (modal, i) => {
        modal // TODO: for linter)
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
              direction={modal.openDirection}
              close={!!modal.closed}
              index={i}
              onClose={closeModal}
              key={i}
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
      <div className={modalClasses['modals']}>
        {children}
        {openedModals}
      </div>
    </ModalsContext.Provider>
  );
};
