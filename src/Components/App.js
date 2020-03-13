import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducer from '@root/src/Redux/reducer';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import root from '@root/src/Redux/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,
    applyMiddleware(sagaMiddleware));


ReactDom.render(<Provider store={store}><div>Test</div></Provider>, document.getElementById('root'));

sagaMiddleware.run(root);