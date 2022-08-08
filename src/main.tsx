import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { PokemonProvider } from './context/Pokemon/PokemonProvider';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonProvider>
        <GlobalStyle />
        <App />
      </PokemonProvider>
    </BrowserRouter>
  </React.StrictMode>
);
