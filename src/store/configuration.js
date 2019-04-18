import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';


import { rootReducer } from '../reducers'
import epics from './sagas';

const sagaMiddleware = createSagaMiddleware()

function configureStoreProd(initialState) {
    const middlewares = [
        sagaMiddleware
    ];

    const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));

    epics.forEach(epic => sagaMiddleware.run(epic));

    return store;
}

function configureStoreDev(initialState) {
    const middlewares = [
        sagaMiddleware
    ];

    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

    epics.forEach(epic => sagaMiddleware.run(epic));
    return store;
}

export default process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
