import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './store';
import {Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ToastContainer theme='dark' />
    <App />
  </Provider>
);

