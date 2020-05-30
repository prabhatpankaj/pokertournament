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
    SET_REMAINING_SECONDS: 'SET_REMAINING_SECONDS'
}

export const PlayerAction = {
    ADD_PLAYER: 'ADD_PLAYER',
    RESERVE_PLAYER: 'RESERVE_PLAYER',
    BUYIN_PLAYER: 'ADD_PLAYER_BUYIN',
    BUST_PLAYER: 'BUST_PLAYER'
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

export const setRemainingSeconds = remainingSeconds => ({
    type: TournamentClockAction.SET_REMAINING_SECONDS,
    remainingSeconds: remainingSeconds
})

export const addPlayer = player => ({
    type: PlayerAction.ADD_PLAYER,
    player
})

export const reservePlayer = player => ({
    type: PlayerAction.RESERVE_PLAYER,
    player
})

export const buyinPlayer = player => ({
    type: PlayerAction.BUYIN_PLAYER,
    player
})

export const bustPlayer = player => ({
    type: PlayerAction.BUST_PLAYER,
    player
})
