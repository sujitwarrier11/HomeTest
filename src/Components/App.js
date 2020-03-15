import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducer from '@root/src/Redux/reducer';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import root from '@root/src/Redux/sagas';
import TvList from '@root/src/Components/TvList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShowDetails from '@root/src/Components/ShowDetails';
import logger from 'redux-logger';


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];
const store = createStore(reducer,
    applyMiddleware(...middleware));


ReactDom.render(<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={TvList} />
            <Route path="/details" component={ShowDetails} />
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'));

sagaMiddleware.run(root);