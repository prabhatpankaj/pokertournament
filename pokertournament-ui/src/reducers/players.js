import { PlayerAction, TableAction } from '../actions'
import Logger from 'js-logger'

// E.g. reservedByPlayerId[10] = 4, reserved[4] = reservation information
const initialPlayers = {
    info: [],                   // player information (first name, last name, email, etc.)
    infoIndexByPlayerId: {},    // playerId => index into info
    reserved: [],               // reserved information (tournamentId, playerId, timestamp)
    reservedByPlayerId: {},     // playerId => index into reserved 
    boughtIn: [],               // bought in information (tournamentId, playerId, timestamp)
    boughtInByPlayerId: {},     // playerId => index into boughtIn
    seating: [],                // seating information (tournamentId, playerId, timestamp, tableId, seat)
    seatingByPlayerId: {}       // playerId => index into seating
}

// TODO: Do I need active and busted?

const players = (state = initialPlayers, action) => {
    switch (action.type) {
        case PlayerAction.SET_PLAYERS:
            var infoIndexByPlayerId = {}
            action.players.forEach((player, index) => {
                infoIndexByPlayerId[player.id] = index
            });

            return {
                ...state,
                info: action.players,
                infoIndexByPlayerId: Object.assign({}, infoIndexByPlayerId)
            }

        case PlayerAction.SET_RESERVATIONS:
            Logger.info(`Array.isArray(action.reservations)=${Array.isArray(action.reservations)}`)

            var reservedByPlayerId = {}
            action.reservations.forEach((reservation, index) => {
                reservedByPlayerId[reservation.playerId] = index
            })

            return {
                ...state,
                reserved: action.reservations,
                reservedByPlayerId: Object.assign({}, reservedByPlayerId)
            }

        case PlayerAction.RESERVE_PLAYER:
            return {
                ...state,
                reserved: [...state.reserved, action.reservation],
                reservedByPlayerId: Object.assign({}, state.reservedByPlayerId, { [action.reservation.playerId]: state.reserved.length })
            }

        case PlayerAction.BUYIN_PLAYER:
            return {
                ...state,
                // TODO: Add buyin amount and timestamp
                boughtIn: [...state.boughtIn, action.player.id]
            }

        case TableAction.SET_SEATING:
            var seatingByPlayerId = {}
            action.seating.forEach((seating, index) => {
                seatingByPlayerId[seating.playerId] = index
            })

            return {
                ...state,
                seating: action.seating,
                seatingByPlayerId: Object.assign({}, seatingByPlayerId)
            }
    
        case TableAction.SEAT_PLAYER:
            return {
                ...state,
                seating: [...state.seating, action.seating],
                seatingByPlayerId: Object.assign({}, state.seatingByPlayerId, { [action.seating.playerId]: state.seating.length })
            }

        case PlayerAction.BUST_PLAYER:
            // TODO: Remove from active
            return {
                ...state,
                busted: [...state.busted, action.player.id]
            }

        default:
            return state
    }
}

export default players
