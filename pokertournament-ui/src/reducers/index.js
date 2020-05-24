import { combineReducers } from 'redux'
import menus from './menus'
import user from './user'
import tournament from './tournament'
import tournamentState from './tournamentState'

export default combineReducers({
    menus,
    user,
    tournament,
    tournamentState
})
