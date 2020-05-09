// @see https://redux.js.org/basics/example/

// Action Types
export const UserAction = {
    SET_USER: 'SET_USER',
    CLEAR_USER: 'CLEAR_USER'
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

export const setTournamentView = view => ({
    type: SET_TOURNAMENT_VIEW,
    view
})

export const TournamentViews = {
    TABLE_VIEW: 'TABLE_VIEW',
    REGISTRATION_VIEW: 'REGISTRATION_VIEW'
}
