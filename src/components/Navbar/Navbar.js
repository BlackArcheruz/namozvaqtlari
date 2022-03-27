import {Link, useHistory} from 'react-router-dom'

const Navbar = () => {
    const history = useHistory();
    return (
        <div className="container navbar">
        <nav>
          <Link to="/"><h2>NAMOZ VAQTLARI</h2></Link>
        </nav> 
        <div className="back">
        <h2><a onClick={() => history.goBack()}>Ortga</a></h2>   
        </div>
        </div>
    )
}

export default Navbar
