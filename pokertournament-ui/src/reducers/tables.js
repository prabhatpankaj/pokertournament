import { TableAction } from '../actions'

const initialTables = {
    "tableIds": [],
    "tablesById": {},
    "seating": []
}

const tables = (state = initialTables, action) => {
    switch (action.type) {
        case TableAction.SET_TABLES:

            // {
            //     "id": 1,
            //     "tournamentId": 14,
            //     "name": "Spades",
            //     "seats": 10
            // },

            let tableIds = []
            let tablesById = {}

            // FIXIT: Could do this with action.tables.reduce
            action.tables.map(table => {
                tableIds.push(table.id)
                table.players = new Array(table.seats).fill(null)
                tablesById[table.id] = table
                return table
            })

            return {
                ...state,
                tableIds: tableIds,
                tablesById: tablesById
            }

        case TableAction.SET_SEATING:
            // action.seating is 
            // {
            //     "id": 1,
            //     "tournamentId": 14,
            //     "tableId": 1,
            //     "seat": 1,
            //     "playerId": 36
            // },

            let newState = Object.assign({}, state)

            action.seating.forEach(seating => {
                let table = Object.assign({}, state.tablesById[seating.tableId])
                table.players[seating.seat] = seating.playerId
                newState.tablesById[seating.tableId] = table
            })


            // return {
            //     ...state,
            //     seating: action.seating
            // }

            return newState
        

        case TableAction.SEAT_PLAYER:
            let table = Object.assign({}, state.tablesById[action.seating.tableId])
            table.players[action.seating.seat] = action.seating.playerId
            return {
                ...state,
                tablesById: Object.assign({}, state.tablesById, table)
            }

        default:
            return state
    }
}
  
export default tables
