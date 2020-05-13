import { MenuAction } from '../actions'

const initialMenus = []

const menus = (state = initialMenus, action) => {
    switch (action.type) {
        case MenuAction.SET_MENUS:
            return action.menus.slice(0, action.menus.length)

        case MenuAction.CLEAR_MENUS:
            return []

        default:
            return state
    }
}

export default menus