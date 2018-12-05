import { combineReducers, createStore } from 'redux'

import counter from './state/counter'


const rootReducer = combineReducers({
    counter
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)
