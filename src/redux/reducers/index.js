import { combineReducers } from 'redux'
import pageReducer from './burger'
import counterReducer from '../reducers/counter'

const allReducers = combineReducers({
    page: pageReducer,
    counter: counterReducer,
})

export default allReducers
