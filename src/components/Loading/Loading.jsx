import './loading.css'
import loading from './Loading.svg'

const Loading = ()=>{
  return (
    <div className="loading-body">
    <div className="loading-content">
      <img src={loading} className="loading" alt="loading"/>
    </div>
    </div>
  )
}

export default Loading;
