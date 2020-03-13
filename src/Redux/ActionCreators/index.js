import { GET_TV_SHOWS } from '@root/src/Redux/constants';

export const getTvlist = payload =>{
    return {
        type: GET_TV_SHOWS
    }
}