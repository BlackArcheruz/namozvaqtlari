import React from 'react'
import Hadis from '../Hadis/Hadis'

const Prayers = (props) => {
    const style = {display: 'flex', justifyContent: 'space-between'}
    const prayers = props.prayers
    const city = props.city
    return (
        <div style={style}>
                <div className="prayers">
                    <h2>{city === '' ? 'Shahar nomini kiriting va Qidirishni bosing !' : city + 'da Namoz Vaqtlari:'}</h2>
                    {city === '' ? null :<div className="prayer">
                        <div className="prayer2">
                    <h4>Bomdod: </h4>
                    <h4>Quyosh: </h4>
                    <h4>Peshin: </h4>
                    <h4>Asr: </h4>
                    <h4>Shom: </h4>
                    <h4>Xufton: </h4>
                    </div> 
                    <div className="prayer1">
                    <p>{prayers.Fajr}</p> 
                    <p>{prayers.Sunrise}</p>
                    <p>{prayers.Dhuhr}</p>
                    <p>{prayers.Asr}</p>
                    <p>{prayers.Maghrib}</p>
                    <p>{prayers.Isha}</p></div>
                    </div>}
                </div>
                <Hadis/>
        </div>
    )
}

export default Prayers
