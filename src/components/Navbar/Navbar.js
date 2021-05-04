import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container">
        <nav>
          <Link to="/"><h2>NAMOZ VAQTLARI</h2></Link>
          <ul>
              <li><Link to="/about"><h3>LOYIHA HAQIDA</h3></Link></li>
              <li><Link to="/contact"><h3>BOG’LANISH </h3></Link></li>
          </ul>
        </nav>
        </div>
    )
}

export default Navbar
