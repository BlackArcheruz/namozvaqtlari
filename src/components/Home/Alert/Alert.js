import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const Alert = ({alert})=>{
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])
    return(
        alert !== null && ( <div className="alert" data-aos="zoom-in">
            <h4>Iltimos Shahar nomini kiriting !</h4>
        </div>
        )
    )
}

export default Alert