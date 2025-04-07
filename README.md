# React Mobile Modals

[![NPM](https://img.shields.io/npm/v/react-mobile-modals.svg)](https://www.npmjs.com/package/react-mobile-modals) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![React Version](https://img.shields.io/badge/react-19.1.0-blue.svg)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A powerful and flexible React library for creating native-like modal navigation in mobile web applications. Perfect for creating seamless, app-like experiences in your web applications.

![Demo Example](https://github.com/skilldill/react-mobile-modals/blob/master/blob/example.gif?raw=true)

## ✨ Features

- 🚀 Native-like modal transitions and animations
- 📱 Mobile-first design approach
- ↔️ Support for both horizontal and vertical transitions
- 🎨 Highly customizable
- 🔄 Smooth navigation flow
- 💡 Simple and intuitive API
- 📦 Lightweight with minimal dependencies
- 🛠 TypeScript support out of the box

## 🚀 Installation

Using npm:
```bash
npm install react-mobile-modals
```

Using yarn:
```bash
yarn add react-mobile-modals
```

## 🛠 Quick Start

1. Wrap your application with `ModalsProvider`:

```tsx
import { ModalsProvider } from 'react-mobile-modals';
import 'react-mobile-modals/dist/index.css';

const App = () => {
  return (
    <ModalsProvider>
      {/* Your app content */}
    </ModalsProvider>
  );
};
```

2. Use the modal navigation anywhere in your components:

```tsx
import { useModals } from 'react-mobile-modals';

const MyComponent = () => {
  const { openModal, closeModal } = useModals();

  const handleOpenModal = () => {
    openModal({
      component: <YourModalComponent />,
      openDirection: 'horizontal' // or 'vertical'
    });
  };

  return (
    <button onClick={handleOpenModal}>
      Open Modal
    </button>
  );
};
```

## 📖 API Reference

### ModalsProvider

The root component that enables modal functionality in your application.

```tsx
<ModalsProvider>
  <YourApp />
</ModalsProvider>
```

### useModals Hook

A custom hook that provides modal control functions.

```tsx
const { openModal, closeModal } = useModals();
```

#### openModal Options

| Property    | Type                    | Required | Default      | Description                               |
|------------|-------------------------|----------|--------------|-------------------------------------------|
| component  | `ReactNode`             | Yes      | -            | The component to render in the modal      |
| openDirection  | `'horizontal' \| 'vertical'` | No       | 'horizontal' | The direction of the modal animation      |

## 🌟 Advanced Usage

### Nested Modals

You can create nested modal flows for complex navigation patterns:

```tsx
const NestedExample = () => {
  const { openModal, closeModal } = useModals();

  const openNestedModal = () => {
    openModal({
      component: (
        <div>
          <h2>Nested Modal</h2>
          <button onClick={closeModal}>Close</button>
        </div>
      ),
      openDirection: 'vertical'
    });
  };

  return (
    <div>
      <h1>First Modal</h1>
      <button onClick={openNestedModal}>Open Nested</button>
    </div>
  );
};
```

## 🎯 Use Cases

- Mobile-first web applications
- Progressive Web Apps (PWAs)
- Mobile web views within native applications
- Complex modal workflows
- Multi-step forms and wizards

## 🔗 Live Demo

Check out our [live demo](https://skilldill.github.io/react-mobile-modals/) to see React Mobile Modals in action!

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 📄 License

MIT © [skilldill](https://github.com/skilldill)
