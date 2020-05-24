import { TournamentStateAction } from '../actions'

const tournamentState = (state = {}, action) => {
    switch (action.type) {
        case TournamentStateAction.SET_TOURNAMENT_STATE:
            return Object.assign({}, action.tournamentState)

        default:
            return state
    }
}
  
export default tournamentState
