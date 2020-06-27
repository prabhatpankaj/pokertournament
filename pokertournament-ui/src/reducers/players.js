import { PlayerAction } from '../actions'

const initialPlayers = {
    "byPlayerId": {},
    "reserved": [],
    "boughtIn": [],
    "active": [],
    "busted": []
}

const players = (state = initialPlayers, action) => {
    switch (action.type) {
        case PlayerAction.ADD_PLAYER:
            return {
                ...state,
                byPlayerId: Object.assign({}, state.byPlayerId, { [action.player.id]: action.player })
            }

        case PlayerAction.RESERVE_PLAYER:
            return  {
                ...state,
                reserved: [...state.reserved, action.player.id]
            }

        case PlayerAction.BUYIN_PLAYER:
            return  {
                ...state,
                // TODO: Add buyin amount and timestamp
                boughtIn: [...state.boughtIn, action.player.id]
            }

        case PlayerAction.SEAT_PLAYER:
            // TODO: Add table and seat
            const seating = {
                playerId: action.player.id,
                tableId: action.tableId,
                seat: action.seat
            }
            return {
                ...state,
                active: [...state.active, seating]
            }
            return state

        case PlayerAction.BUST_PLAYER:
            // TODO: Remove from active
            return  {
                ...state,
                busted: [...state.busted, action.player.id]
            }

        default:
            return state
    }
}
  
export default players

// function todos(state = [], action) {
//     switch (action.type) {
//       case ADD_TODO:
//         return [
//           ...state,
//           {
//             text: action.text,
//             completed: false
//           }
//         ]
//       case TOGGLE_TODO:
//         return state.map((todo, index) => {
//           if (index === action.index) {
//             return Object.assign({}, todo, {
//               completed: !todo.completed
//             })
//           }
//           return todo
//         })
//       default:
//         return state
//     }
//   }
