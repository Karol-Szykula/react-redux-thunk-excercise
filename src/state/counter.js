const INC = 'counter/INC'
const DEC = 'counter/DEC'


const INITIAL_STATE = {
    number: 0
}

export const inc = (number = 1) => ({
    type: INC,
    number
})

export const dec = (number = 1) => ({
    type: DEC,
    number
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case (DEC):
            return ({
                // ...state,
                number: state.number - action.number
            })

        case (INC):
            return ({
                // ...state,
                number: state.number + action.number
            })

        default:
            return state
    }
}
