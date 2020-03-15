import { GET_TV_SHOWS, SET_TV_SHOWS, SET_PAGINATION, GET_DETAILS, SET_DETAILS, SET_SELECTED_SHOW, SAVED_PAGES } from '@root/src/Redux/constants';

export const getTvlist = payload => {
    return {
        type: GET_TV_SHOWS,
        payload
    }
}

export const setTvlist = payload => {
    return {
        type: SET_TV_SHOWS,
        payload
    }
}

export const setPagination = payload => {
    return {
        type: SET_PAGINATION,
        payload
    }
}



export const getDetails = payload => {
    return {
        type: GET_DETAILS,
        payload
    }
}

export const setDetails = payload => {
    return {
        type: SET_DETAILS,
        payload
    }
}

export const setSelectedShow = payload => {
    return {
        type: SET_SELECTED_SHOW,
        payload
    }
}

export const setPage = payload => {
    return {
        type: SAVED_PAGES,
        payload
    }
}
