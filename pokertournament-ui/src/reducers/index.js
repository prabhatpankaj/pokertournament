import { combineReducers } from 'redux'
import user from './user'
import players from './players'
// import view from './view'

export default combineReducers({
    user,
    players
})
