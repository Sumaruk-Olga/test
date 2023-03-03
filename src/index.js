import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store, persistor } from 'redux/store';
import { App } from 'components/App';
import {theme} from './utiles/theme';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>    
        <PersistGate loading={null} persistor={persistor}>
          <App/>    
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
