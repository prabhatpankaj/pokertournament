import { TableAction } from '../actions'

const initialTables = {
    tableInfo: [],              // array of table information
    tablesSeatingInfo: [],      // array of seating information, tablesSeatingInfo[tableIndex][seatIndex] == playerId
    indexForTableId: {}         // map of tableId => index for tableInfo and tablesSeatingInfo
}

const tables = (state = initialTables, action) => {
    switch (action.type) {
        case TableAction.SET_TABLES: {
            var indexForTableId = {}
            var setTablesTableSeatingInfo = []
            action.tables.forEach((table, index) => {
                indexForTableId[table.id] = index
                setTablesTableSeatingInfo[index] = new Array(table.seats);
            });

            return {
                ...state,

                tableInfo: action.tables,
                tablesSeatingInfo: setTablesTableSeatingInfo,
                indexForTableId: indexForTableId
            }
        }

        case TableAction.SET_SEATING: {
            const newTableSeatingInfo = state.tablesSeatingInfo.slice(0)
            let newState = Object.assign({}, state)

            action.seating.forEach(seating => {
                const tableIndex = state.indexForTableId[seating.tableId]
                const tableSeatingInfo = newTableSeatingInfo[tableIndex]
                tableSeatingInfo[seating.seat] = seating.playerId
            })

            newState.tablesSeatingInfo = newTableSeatingInfo
            return newState
        }

        case TableAction.SEAT_PLAYER: {
            var tableIndex = state.indexForTableId[action.seating.tableId]

            // TODO: I can probably do this with a map similar to
            // return {
            //     ...state,
            //     tablesSeatingInfo: state.tablesSeatingInfo.map((tableSeatingInfo, index) => {
            //         if (index === tableIndex) {
            //             ...
            //         }
            //     })
            // }

            var newTableSeatingInfo = state.tablesSeatingInfo[tableIndex].slice(0)
            newTableSeatingInfo[action.seating.seat] = action.seating.playerId
            var newTablesSeatingInfo = state.tablesSeatingInfo.slice(0, tableIndex).concat([newTableSeatingInfo]).concat(state.tablesSeatingInfo.slice(tableIndex + 1))

            return {
                ...state,
                tablesSeatingInfo: newTablesSeatingInfo
            }

        }

        default:
            return state
    }
}

export default tables
