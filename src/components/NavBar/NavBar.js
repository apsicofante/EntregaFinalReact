import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom' 

const NavBar = () => {
	return (
		<nav className="NavBar" >
			<NavLink end to={`/`} className={({ isActive}) => isActive ? 'ActiveOption' : ''}>
				<strong>Cafeteria The 80´s</strong>
			</NavLink>
			<div className="Enlaces">
				<NavLink end to={`/category/cafe`} className={({ isActive}) => isActive ? 'ActiveOption' : ''}>Cafe</NavLink>
				<NavLink end to={`/category/capuccino`} className={({ isActive}) => isActive ? 'ActiveOption': ''}>Capuccino</NavLink>
				<NavLink end to={`/category/licuado`} className={({ isActive}) => isActive ? 'ActiveOption': ''}>Licuado</NavLink>
			</div>
			<CartWidget />
		</nav>
	)
}

export default NavBar
