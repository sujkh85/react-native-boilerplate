import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';


const logger = createLogger({
    level: 'info',
    collapsed: true,
});

const enhancer = applyMiddleware(thunk, logger)

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);

    return store;
}
