import {fork} from 'redux-saga/effects';
import { SearchUser, searchUserReducer} from '../features/SearchUser/slice';
import { watchFetchUser } from '../features/SearchUser/saga';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    [SearchUser]: searchUserReducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga(){
    yield fork(watchFetchUser);
}

const createStore = () =>{
    const store = configureStore({
        reducer:rootReducer,
        devTools: true,
        middleware:[sagaMiddleware]
    });

    sagaMiddleware.run(rootSaga);

    return store;
}

export default createStore;