import { GET_TV_SHOWS, SET_TV_SHOWS, SET_PAGINATION, SET_DETAILS, SET_SELECTED_SHOW, SAVED_PAGES } from '@root/src/Redux/constants';

const getDistinct = (arr1,arr2) =>{
 return arr2.filter(item =>{
    return arr1.filter(innerItem=>innerItem.row_id === item.row_id).length === 0;
 });
}

const reducer = (state = {}, action) => {
    switch (action.type.toUpperCase()) {
        case GET_TV_SHOWS: return state;
        case SET_TV_SHOWS: return {
            ...state,
            TvShows: state.TvShows ? [...state.TvShows, ...getDistinct(state.TvShows,action.payload)] : action.payload
        }
        case SET_PAGINATION: return {
            ...state,
            pagination: action.payload
        }
        case SET_DETAILS: return {
            ...state,
            details: state.details ? {
                ...state.details,
                [action.payload.id]: action.payload
            } : {
                    [action.payload.id]: action.payload
                }
        }
        case SET_SELECTED_SHOW: return {
            ...state,
            selectedShow:action.payload.id
        }
        case SAVED_PAGES: return {
            ...state,
            page: action.payload
        }
        default: return state;
    }
}

export default reducer;