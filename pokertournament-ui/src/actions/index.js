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

export const SET_TOURNAMENT_VIEW = 'SET_TOURNAMENT_VIEW'

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

export const setTournamentView = view => ({
    type: SET_TOURNAMENT_VIEW,
    view
})

export const TournamentViews = {
    TABLE_VIEW: 'TABLE_VIEW',
    REGISTRATION_VIEW: 'REGISTRATION_VIEW'
}
