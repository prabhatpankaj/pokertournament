import { combineReducers } from 'redux'
import menus from './menus'
import user from './user'
import tournament from './tournament'
import tournamentState from './tournamentState'
import clock from './clock'
import players from './players'
import tables from './tables'

export default combineReducers({
    menus,
    user,
    tournament,
    tournamentState,
    clock,
    players,
    tables
})
