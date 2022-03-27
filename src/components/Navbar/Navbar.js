import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container">
        <nav>
          <Link to="/"><h2>NAMOZ VAQTLARI</h2></Link>
        </nav>
        <ul>
        <li><a href="https://listen-quran.cf/">Listen Quran </a></li>
        </ul>
        </div>
    )
}

export default Navbar
