import './loading.css'
import loading from './Loading.svg'
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Loading = ()=>{
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])
  return (
    <div className="loading-body">
    <div className="loading-content">
      <img src={loading} className="loading" alt="loading" data-aos="fade"/>
    </div>
    </div>
  )
}

export default Loading;
