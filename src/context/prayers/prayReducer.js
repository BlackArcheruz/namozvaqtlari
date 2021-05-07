import {SEARCH_PRAYING_TIME} from '../types';

// eslint-disable-next-line
export default (state,action)=>{
    // eslint-disable-next-line
    switch(action.type){
        case SEARCH_PRAYING_TIME:
            return {
                ...state,
                prayers: action.payload
            }
    }
}