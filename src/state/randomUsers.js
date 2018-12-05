const SET_USERS = 'randomUSers/SET_USERS'

const INITIAL_STATE = {
    users: []
}

export const setUsers = users => ({
    type: SET_USERS,
    users: users
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        default: return state
    }
}