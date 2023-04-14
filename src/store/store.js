import { compose, createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);