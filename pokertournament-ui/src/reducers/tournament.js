import { TournamentAction } from '../actions'

const tournament = (state = {}, action) => {
    switch (action.type) {
        case TournamentAction.SET_TOURNAMENT:
            return Object.assign({}, action.tournament)

        case TournamentAction.CLEAR_TOURNAMENT:
            return null

        default:
            return state
    }
}
  
export default tournament
