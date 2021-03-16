# React obile modals

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-mobile-modals.svg)](https://www.npmjs.com/package/react-mobile-modals) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![alt text](https://github.com/skilldill/react-mobile-modals/blob/master/blob/example.gif?raw=true)

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
import React, { Component } from 'react'

import { ModalsProvider, useModals } from 'react-mobile-modals'
import 'react-mobile-modals/dist/index.css'

const Page = () => {
  const { closeModal } = useModals();

  return (
    <div className="page">
      <button onClick={closeModal}>
        Back
      </button>
    </div>  
  )
}


const MainWindow = () => {
  const { openModal } = useModals();

  const openPage = () => openModal({ component: <Page /> });

  return (
    <div className="page main">
      <button onClick={openPage}>
        Open first modal
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
### Example https://skilldill.github.io/react-mobile-modals/
## License

MIT © [](https://github.com/)
