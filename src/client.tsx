import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = (
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
);
hydrateRoot(document.getElementById('root')!, root);
