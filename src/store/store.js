import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    session: SessionReducer
});

export const store = createStore(reducers);