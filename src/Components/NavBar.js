

import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <div className="navbar">
      <h1>La Tienducha</h1>
      <ul className="links">
        <li>
          <button href="#">Nosotros</button>
        </li>
        <li>
        <button href="#">Accesorios</button>
        </li>
        <li>
        <button href="#">Audio</button>
        </li>
        <li>
        <button href="#">Tecnologia</button>
        </li>

      </ul>
      <CartWidget image='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" width="200" alt="shopping cart svg png icon download'/>
    </div>
  )
}

export default NavBar