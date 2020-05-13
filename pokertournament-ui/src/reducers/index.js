import { combineReducers } from 'redux'
import menus from './menus'
import user from './user'
import tournament from './tournament'

export default combineReducers({
    menus,
    user,
    tournament
})
