import React from 'react';
import ReactDom from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import reducer from './src/Redux/reducer';
import createSagaMiddleware from 'redux-saga';


const store = createStore(reducer);

ReactDom.render(<div>Test</div>,document.getElementById('root'));