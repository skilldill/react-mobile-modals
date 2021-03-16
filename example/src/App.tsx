import React from 'react'

import { ModalsProvider, useModals } from 'react-mobile-modals'
import "react-mobile-modals/dist/index.css";

import "./index.css";

const ThridModal = () => {
  const { closeModal } = useModals();

  return (
    <div className="page page-blue">
      <button onClick={closeModal}>
        Back
      </button>
    </div>
  )
}


const SecondModal = () => {
  const { addModal } = useModals();

  const openThridModal = () => addModal({ component: <ThridModal /> });

  return (
    <div className="page page-red">
      <button onClick={openThridModal}>
        Open thrid modal
      </button>
    </div>  
  )
}



const FirstModal = () => {
  const { addModal } = useModals();

  const openSecondModal = () => addModal({ component: <SecondModal /> });

  return (
    <div className="page page-green">
      <button onClick={openSecondModal}>
        Open second modal
      </button>
    </div>  
  )
}


const MainWindow = () => {
  const { addModal } = useModals();

  const openFirstModal = () => addModal({ component: <FirstModal /> });

  return (
    <div className="page main">
      <button onClick={openFirstModal}>
        Open first modal
      </button>
    </div>
  )
}



const App = () => {
  return (
    <ModalsProvider>
      <MainWindow />
    </ModalsProvider>
  )
}

export default App
