import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { TokenContext } from './context/Context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TokenContext>
      <App />
    </TokenContext>
  </StrictMode>
);
