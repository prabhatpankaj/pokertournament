import { TournamentClockAction } from '../actions'

const clock = (state = {}, action) => {
    switch (action.type) {
        case TournamentClockAction.SET_CLOCK:
            return Object.assign({}, action.clock)

        default:
            return state
    }
}
  
export default clock
