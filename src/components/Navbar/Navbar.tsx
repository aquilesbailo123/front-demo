import './Navbar.css';
import { NavLink } from "react-router-dom";

function Navbar() {
      return (
            <div className='navbar-main-cont'>
                  <NavLink className='nav-link' to='/'>Cotizador</NavLink>
            </div>
      )
}

export default Navbar