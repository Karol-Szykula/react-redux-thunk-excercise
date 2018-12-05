const SET_USERS = 'randomUSers/SET_USERS'
const START_FETCHING = 'randomUsers/START_FETCHING'
const STOP_FETCHING = 'randomUsers/STOP_FETCHING'
const ERROR_FETCHING = 'randomUsers/ERROR_FETCHING'

const INITIAL_STATE = {
    users: []
}

//redux-thunk calls async action with dispatch and getState as arguments
export const fetchUsersAsyncAction = () => (dispatch, getState) => {
    dispatch(startFetchingAction())
    fetch('https://randomuser.me/api')
        .then(r => r.json())
        .then(data => {
            dispatch(setUsersAction(data.results))
            dispatch(stopFetchingAction())
        })
        .catch(() => {
            dispatch(errorFetchingAction())
        })
}

const startFetchingAction = () => ({ type: START_FETCHING })
const stopFetchingAction = () => ({ type: STOP_FETCHING })
const errorFetchingAction = () => ({ ERROR_FETCHING })

const setUsersAction = users => ({
    type: SET_USERS,
    users: users,
    isFetching: false,
    isError: false
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                isError: false
            }
        case STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
                isError: false

            }
        case ERROR_FETCHING:
            return {
                ...state,
                isFetching: false,
                isError: true

            }
        default: return state
    }
}