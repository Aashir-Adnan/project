import {combineReducers} from 'redux'
import mainReducer from './mainReducer'

const rootReducer = combineReducers({
      main:mainReducer,
})
export default rootReducer
