import React, { useContext } from 'react'
import PrayContext from '../../../context/prayers/prayerContext';

const Prayers = (props) => {
    const prayContext = useContext(PrayContext);
    const {prayers} = prayContext;
    const city = props.city
    return (
        <div className="mobi" data-aos="fade-up-right">
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
        </div>
    )
}

export default Prayers
