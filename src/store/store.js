import { createStore, combineReducers } from 'redux';
import { EpaycoReducer } from '../reducers/epaycoReducer';

const reducers = combineReducers({
    epayco: EpaycoReducer
});

export const store = createStore(reducers);