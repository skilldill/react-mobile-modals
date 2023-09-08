# React mobile modals

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-mobile-modals.svg)](https://www.npmjs.com/package/react-mobile-modals) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Use with webview for creation pretty navigation 📱

![example](https://github.com/skilldill/react-mobile-modals/blob/master/blob/example-direction.gif?raw=true)

## Install

```bash
npm install --save react-mobile-modals
```

or

```bash
yarn add react-mobile-modals
```

## Usage

```tsx
import React from 'react'

import { ModalsProvider, useModals } from 'react-mobile-modals'
import 'react-mobile-modals/dist/index.css'

const SecondPage = () => {
  const { closeModal } = useModals();

  return (
    <div className="page">
      <button onClick={closeModal}>
        Back
      </button>
    </div>
  )
}

const FirstPage = () => {
  const { openModal } = useModals();

  const openSecondPage = () => openModal({ component: <SecondPage />, direction: "vertical" });

  return (
    <div className="page">
      <button onClick={openSecondPage}>
        Open second page
      </button>
    </div>
  )
}


const MainWindow = () => {
  const { openModal } = useModals();

  const openFirstPage = () => openModal({ component: <FirstPage /> });

  return (
    <div className="page main">
      <button onClick={openFirstPage}>
        Open first page
      </button>
    </div>
  )
}

const App = () => {
  render() {
    return (
      <ModalsProvider>
        <MainWindow />
      </ModalsProvider>
    )
  }
}
```

### openModal(modalProps)

#### modalProps

- `component`: ReactNode;
- `direction`: horizontal(default), vertical;

### Example https://skilldill.github.io/react-mobile-modals/

## License

MIT © [](https://github.com/)
