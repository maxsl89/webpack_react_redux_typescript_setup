import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import store from './store';
import { Provider } from 'react-redux';
import './styles/style.scss';

const ROOT = document.querySelector('.container');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  ROOT
);
