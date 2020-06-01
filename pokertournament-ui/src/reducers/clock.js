import { TournamentClockAction } from '../actions'

const clock = (state = {}, action) => {
    switch (action.type) {
        case TournamentClockAction.SET_REMAINING_SECONDS:
            return {
                ...state,
                remainingSeconds: action.remainingSeconds
            }

        case TournamentClockAction.SET_REMAINING_SECONDS_UNTIL_BREAK:
            return {
                ...state,
                remainingSecondsUntilBreak: action.remainingSecondsUntilBreak
            }
    
        default:
            return state
    }
}
  
export default clock
