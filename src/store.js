import { combineReducers, createStore } from 'redux';

const reducer1 = () => {
    return {
        name: 'Ala'
    }
}

const reducer2 = () => {
    return {
        name: 'Ola'
    }
}

const rootReducer = combineReducers({
    reducer1,
    reducer2
})

export const store = createStore(
    rootReducer
)
