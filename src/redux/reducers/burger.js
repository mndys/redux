import burgers from '../../data/burgers.json'

const initialState = {
    burger: burgers.Menu.Burgers.Items.
}

export default function burgerReducer(state = initialState, action) {
    switch (action.type) {
        case 'burger/incremented':
            return { ...state, page: state.page + 1 }

        case 'burger/decremented':
            return { ...state, page: state.page - 1 }

        default:
            return state
    }
}
