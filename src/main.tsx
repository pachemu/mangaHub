import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
