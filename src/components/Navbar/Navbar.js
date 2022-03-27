import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container">
        <nav>
          <Link to="/"><h2>NAMOZ VAQTLARI</h2></Link>
        </nav>    
        </div>
    )
}

export default Navbar
