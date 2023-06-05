import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';

import reducer from './state/reducers/index'

// Sprint 10 redux :(

const root = ReactDOM.createRoot(document.getElementById('root'));

  const persistConfig = {
    key: root,
    storage
  }

const persistedReducer=persistReducer (persistConfig, reducer)

const store = createStore(persistedReducer, applyMiddleware());


const Persistor = persistStore(store)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={Persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>

);