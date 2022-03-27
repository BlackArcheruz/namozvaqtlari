import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container">
        <nav>
          <Link to="/"><h2>NAMOZ VAQTLARI</h2></Link>
           <ul>
        <li><a href="https://listen-quran.cf/">Listen Quran </a></li>
        </ul>
        </nav>    
        </div>
    )
}

export default Navbar
