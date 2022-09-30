# React Parallax Container

A React component container that can makes a graphic card with a parallax effect

[![Published on npm](https://img.shields.io/npm/v/parallax-container.svg?logo=npm)](https://www.npmjs.com/package/parallax-container)

## Features

- TypeScript friendly
- Supports parallax max depth configuration
- Parallax effect of cards of different sizes has strong consistency

## Installation

```bash
npm install parallax-container
```

## Example

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-xrftvt?file=App.tsx)

## Usage

```tsx
import { ParallaxContainer } from 'parallax-container';

function App() {
  return (
    <ParallaxContainer>
      <img src="https://picsum.photos/seed/picsum/400/250" alt="" width={400} height={250} />
      <p>a text title or description </p>
    </ParallaxContainer>
  );
}

export default App;
```

## Configs

```ts
interface Props {
  children: React.ReactNode; // slot
  maxDepth?: number; // Supports parallax depth configuration
  className?: string;
  style?: React.CSSProperties;
}
```
