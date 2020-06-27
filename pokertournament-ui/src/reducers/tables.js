import { TableAction } from '../actions'

// FIXIT: [PT-39]: Read in tables from API
const initialTables = {
    "tablesById": {
        "1": { "name": "Spade Table", "seats": 10, "players": [null, null, null, null, null, null, null, null, null, null] },
        "2": { "name": "Diamond Table", "seats": 9, "players": [null, null, null, null, null, null, null, null, null] },
        "3": { "name": "Club Table", "seats": 9, "players": [null, null, null, null, null, null, null, null, null] },
        "4": { "name": "Heart Table",  "seats": 10, "players": [null, null, null, null, null, null, null, null, null, null] }
    }
}

const tables = (state = initialTables, action) => {
    switch (action.type) {
        case TableAction.SEAT_PLAYER:
            let table = Object.assign({}, state.tablesById[action.tableId])
            table.players[action.seat] = action.player.id

            return {
                ...state,
                tablesById: Object.assign({}, state.tablesById, table)
            }
        default:
            return state
    }
}
  
export default tables
