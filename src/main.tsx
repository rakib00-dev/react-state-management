import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
// import { TokenProvider } from './context/Context.tsx';
import { store } from './redux/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TokenProvider>
      <App />
    </TokenProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
