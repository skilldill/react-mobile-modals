# react-mobile-modals

[![NPM](https://img.shields.io/npm/v/react-mobile-modals.svg)](https://www.npmjs.com/package/react-mobile-modals) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Use with webview for creation pretty navigation 📱
**react-mobile-modals** simplifies the process of implementing modals in your mobile application, providing a user-friendly and performant solution for displaying contextual content or gathering input from users. With its highly customizable nature, you have full control over the modal behavior and appearance to craft a modal experience that aligns perfectly with your application's requirements.

Enhance your mobile application's user experience with **react-mobile-modals** and empower your users with easily accessible and customizable modals for a seamless interaction within your app!

![example](https://github.com/skilldill/react-mobile-modals/blob/master/blob/example.gif?raw=true)

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
// App.tsx
import 'react-mobile-modals/dist/index.css';

const App = () => {
  render() {
    return (
      <ModalsProvider>
        {/* Your app */}
      </ModalsProvider>
    )
  }
}
```

## Example
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

// App.tsx
import 'react-mobile-modals/dist/index.css';

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

## Props
| openModal params | | | |
| -------- | ------- | ------- | ------- |
| **Prop**    | **Values** | **Default Values** | **Required** |
| component | `ReactNode` | *none* | true |
| direction  | `horizontal`, `vertical` | `horizontal` | false |

### Example https://skilldill.github.io/react-mobile-modals/

## License

MIT © [](https://github.com/)
