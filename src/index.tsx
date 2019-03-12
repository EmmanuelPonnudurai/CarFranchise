import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from './store/index';
import { Provider } from 'react-redux';

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

const target = document.getElementById('root');
ReactDOM.render(<Root />, target);