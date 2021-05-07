import React, {useContext,useEffect,useState} from 'react'
import Prayers from '../Prayers/Prayers';
import PrayContext from '../../../context/prayers/prayerContext';
import Alert from '../Alert/Alert';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Showcase = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])
    const prayContext = useContext(PrayContext);
    const {searchPrayTime} = prayContext;
    const [city,setCity] = useState('');
    const [alert, setAlert] = useState(null);
    const onSubmit = e=>{
        e.preventDefault();
        if(city === ''){
            showAlert('tekshiring', 'error')    
        }else{
            searchPrayTime(city);
        }
    }
    const showAlert = (msg, type)=>{
        setAlert({msg, type})
        setTimeout(()=>setAlert(null),5000)
    }
    const onChange = e=>setCity(e.target.value);
    return (
        <div className="container">
            <div className="showcase">
                <div className="showcase-content">
                <Alert alert={alert}/>
                    <h1 data-aos="fade-right">SHAHRINGIZNI KIRITING:</h1>
                    <form onSubmit={onSubmit} data-aos="fade-up">
                    <input type="text" placeholder="SHAHAR NOMI" onChange={onChange} value={city} name="text"/>
                    <input type="submit" value="QIDIRISH"/>
                    </form>
                    <Prayers city={city}/>
                    {city === '' && alert == null ? <div className="clear"></div> : null}
                </div>
                </div>
            </div>
    )
}

export default Showcase
