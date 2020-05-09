import { UserAction } from '../actions'

const user = (state = {}, action) => {
    switch (action.type) {
        case UserAction.SET_USER:
            return Object.assign({}, action.user)

        case UserAction.CLEAR_USER:
            return null

        default:
            return state
    }
}
  
export default user
