const initialState = {
    value: 0,
}

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'counter/incremented':
            return { ...state, value: state.value + 1 }
        case 'counter/incrementedBy5':
            return { ...state, value: state.value + 5 }
        case 'counter/decremented':
            return { ...state, value: state.value - 1 }
        case 'counter/decrementedBy5':
            return { ...state, value: state.value - 5 }
        case 'counter/reset':
            return { value: 0 }
        case 'counter/add2IfOdd':
            return state.value % 2 !== 0
                ? { ...state, value: state.value + 2 }
                : state
        case 'counter/subtract2IfEven':
            return state.value % 2 === 0
                ? { ...state, value: state.value - 2 }
                : state

        default:
            return state
    }
}
