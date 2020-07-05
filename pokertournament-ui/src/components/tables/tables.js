import fetch from "node-fetch";

export const getTables = league => {
    const url = `${process.env.REACT_APP_API_PATH}/tables/league/3`
    return fetch(url, {
        method: 'GET'
    })
}