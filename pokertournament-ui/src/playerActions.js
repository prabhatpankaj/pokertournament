import fetch from "node-fetch";

function randomlySeatPlayer(tournamentId, tables, playerId) {
    
    // Randomly seat the player:
    // 1. Count the number of empty seats by counting nulls in tablesSeatingInfo[][], m
    // 2. Generate a random number n [0, m)
    // 3. Select the nth seat in tablesSeatingInfo[][] where the seat is null

    var emptySeats = []
    for (var tableIndex = 0; tableIndex < tables.tablesSeatingInfo.length; ++tableIndex) {
        const table = tables.tableInfo[tableIndex]
        const tablesSeatingInfo = tables.tablesSeatingInfo[tableIndex]
        for (var seatIndex = 0; seatIndex < table.seats; ++seatIndex) {
            if (tablesSeatingInfo[seatIndex] == null) {
                emptySeats.push({ tableId: table.id, seatIndex: seatIndex })
            }
        }
    }

    const randomSeatIndex = Math.floor(Math.random() * Math.floor(emptySeats.length - 1))
    const randomSeat = emptySeats[randomSeatIndex]
    const url = `${process.env.REACT_APP_API_PATH}/seating/tournament/${tournamentId}/table/${randomSeat.tableId}/seat/${randomSeat.seatIndex}/player/${playerId}`

    var promise = fetch(url, {
        method: 'PUT'
    })

    return promise
}

export default randomlySeatPlayer