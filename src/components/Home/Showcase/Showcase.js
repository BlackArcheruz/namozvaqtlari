import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Prayers from '../Prayers/Prayers';

const Showcase = () => {
    const [city,setCity] = useState('');
    const [prayers, setPrayers] = useState([]);
    const api = async(city)=>{const res = await axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Uzbekistan&method=2&school=1`)   
    const prayers= res.data.data.timings
    console.log(prayers)
    setPrayers(prayers)}
    const result = useEffect(()=>{
        api(city);
        },[]);
    const onSubmit = e=>{
        e.preventDefault();
        api(city)
    }
    const onChange = e=>setCity(e.target.value);
    return (
        <div className="container">
            <div className="showcase">
                <div className="showcase-content">
                    <h1>SHAHRINGIZNI KIRITING:</h1>
                    <form onSubmit={onSubmit}>
                    <input type="text" placeholder="SHAHAR NOMI" onChange={onChange} value={city} name="text"/>
                    <input type="submit" value="QIDIRISH"/>
                    </form>
                    <Prayers prayers={prayers} city={city}/>
                    {city === '' ? <div className="clear"></div> : null}
                </div>
                </div>
            </div>
    )
}

export default Showcase
