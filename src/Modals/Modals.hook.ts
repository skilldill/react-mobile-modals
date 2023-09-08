import { useContext } from 'react';
import { ModalsContext } from './Modals.context';

export const useModals = () => {
  const modals = useContext(ModalsContext);
  return modals;
};
