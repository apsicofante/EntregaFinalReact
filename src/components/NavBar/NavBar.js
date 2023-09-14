import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget.js"

const NavBar = () => {
    return (
        <div>
            <h2>CAFETERIA THE 80´S</h2>
            <nav className="navBar">
                <ul>
                    <li>
                        <a href = "#">Cafe</a>
                    </li>
                    <li>
                        <a href = "#">Capuccino</a>
                    </li>
                    <li>
                        <a href = "#">Licuado</a>
                    </li>
                </ul>
            </nav>
            <CartWidget/>
        </div>
    )
} 

export default NavBar