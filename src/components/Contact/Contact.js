import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])
    return (
        <div className="container contact" data-aos="fade-right">
            <h1>Bog'lanish</h1>
            <input type="email" placeholder="Emailingizni kiriting" name="text"/>
            <input type="text" placeholder="Ismingizni kiriting" name="text"/>
            <textarea name="text" id="text" placeholder="Takliflaringizni yozib qoldiring"></textarea>
            <button>Yuborish</button>
        </div>
    )
}

export default Contact
