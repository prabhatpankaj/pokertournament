// @see https://redux.js.org/basics/example/

// Action Types
export const UserAction = {
    SET_USER: 'SET_USER',
    CLEAR_USER: 'CLEAR_USER'
}

export const TournamentAction = {
    SET_TOURNAMENT: 'SET_TOURNAMENT',
    CLEAR_TOURNAMENT: 'CLEAR_TOURNAMENT'
}

export const MenuAction = {
    SET_MENUS: 'SET_MENUS',
    CLEAR_MENUS: 'CLEAR_MENUS'
}

export const TournamentStateAction = {
    SET_TOURNAMENT_STATE: 'SET_TOURNAMENT_STATE'
}

export const TournamentClockAction = {
    SET_CLOCK: 'SET_CLOCK'
}

export const PlayerAction = {
    SET_PLAYERS: 'SET_PLAYERS',
    // ADD_PLAYER: 'ADD_PLAYER',
    SET_RESERVATIONS: 'SET_RESERVATIONS',
    RESERVE_PLAYER: 'RESERVE_PLAYER',
    BUYIN_PLAYER: 'BUYIN_PLAYER',
    SEAT_PLAYER: 'SEAT_PLAYER',
    BUST_PLAYER: 'BUST_PLAYER'
}

export const TableAction = {
    SET_TABLES: 'SET_TABLES',
    SEAT_PLAYER: 'SEAT_PLAYER',
    SET_SEATING: 'SET_SEATING'
}

// Action Creators (https://redux.js.org/basics/actions#action-creators)
export const setUser = user => ({
    type: UserAction.SET_USER,
    user
})

export const clearUser = () => ({
    type: UserAction.CLEAR_USER,
})

export const setTournament = tournament => ({
    type: TournamentAction.SET_TOURNAMENT,
    tournament
})

export const clearTournament = () => ({
    type: TournamentAction.CLEAR_TOURNAMENT,
})

export const setMenus = menus => ({
    type: MenuAction.SET_MENUS,
    menus
})

export const clearMenus = () => ({
    type: MenuAction.CLEAR_MENUS,
})

export const setTournamentState = tournamentState => ({
    type: TournamentStateAction.SET_TOURNAMENT_STATE,
    tournamentState
})

export const setSeating = seating => ({
    type: TableAction.SET_SEATING,
    seating
})

export const setTables = tables => ({
    type: TableAction.SET_TABLES,
    tables
})

export const setClock = clock => ({
    type: TournamentClockAction.SET_CLOCK,
    clock: clock
})

export const setPlayers = players => ({
    type: PlayerAction.SET_PLAYERS,
    players
})

export const setReservations = reservations => ({
    type: PlayerAction.SET_RESERVATIONS,
    reservations
})

// export const addPlayer = player => ({
//     type: PlayerAction.ADD_PLAYER,
//     player
// })

export const reservePlayer = player => ({
    type: PlayerAction.RESERVE_PLAYER,
    player
})

export const buyinPlayer = player => ({
    type: PlayerAction.BUYIN_PLAYER,
    player
})

export const seatPlayer = (player, tableId, seat) => ({
    type: PlayerAction.SEAT_PLAYER,
    player,
    tableId,
    seat
})

export const bustPlayer = player => ({
    type: PlayerAction.BUST_PLAYER,
    player
})

export const seatPlayerAtTable = (player, tableId, seat) => ({
    type: TableAction.SEAT_PLAYER,
    player,
    tableId,
    seat
})