import { TournamentClockAction } from '../actions'

const clock = (state = {}, action) => {
    switch (action.type) {
        case TournamentClockAction.SET_REMAINING_SECONDS:
            return {
                ...state,
                remainingSeconds: action.remainingSeconds
            }

        default:
            return state
    }
}
  
export default clock
