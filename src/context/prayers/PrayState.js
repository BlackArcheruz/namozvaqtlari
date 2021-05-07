import {useReducer} from 'react';
import axios from 'axios';
import PrayContext from './prayerContext'
import prayReducer from './prayReducer'
import {SEARCH_PRAYING_TIME} from '../types';

const PrayState = props =>{
    const initialState = {
        prayers: []
}
const [state, dispatch] = useReducer(prayReducer,initialState);

const searchPrayTime = async(city)=>{
    const res = await axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Uzbekistan&method=2&school=1`);
    dispatch({
            type: SEARCH_PRAYING_TIME,
            payload: res.data.data.timings
    }
    )
}
    return <PrayContext.Provider
        value={{
            prayers: state.prayers,
            searchPrayTime
        }}
        >
        {props.children}
    </PrayContext.Provider>
}


export default PrayState;