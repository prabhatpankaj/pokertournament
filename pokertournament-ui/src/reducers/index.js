import { combineReducers } from 'redux'
import user from './user'
import tournament from './tournament'

export default combineReducers({
    user,
    tournament
})
