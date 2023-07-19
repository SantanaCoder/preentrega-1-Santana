

import CartWidget from "./CartWidget"
import { NavLink, Link } from "react-router-dom"


function NavBar() {
  return (
    <nav className="navbar">
      <Link to= '/'>
      <h1>Santana Store</h1>
      </Link>
      <ul className="links">
        <NavLink to = {`/category/cuerdas `} className={( {isActive}) => isActive ? 'ActiveOption' : 'Option'}>cuerdas</NavLink>
        <NavLink to = {`/category/percusion `} className={( {isActive}) => isActive ? 'ActiveOption' : 'Option'}>percusion</NavLink>
        <NavLink to = {`/category/vientos `} className={( {isActive}) => isActive ? 'ActiveOption' : 'Option'}>vientos</NavLink>



      </ul>
      <CartWidget image='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'/>
    </nav>
  )
}

export default NavBar