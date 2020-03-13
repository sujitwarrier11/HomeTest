const reducer = (state,action) =>{
    switch(action.type.toUpperCase()){
        case 'GET_TV_SHOWS': return state;
        default: return state;
    }
}

export default reducer;