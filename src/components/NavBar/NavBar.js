import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink, Link } from 'react-router-dom' 

const NavBar = () => {
	return (
		<nav className="NavBar" >
			<Link to='/'>
				<h3>Cafeteria The 80´s</h3>
			</Link>
			<div className="Enlaces">
				<NavLink to={`/category/cafe`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cafe</NavLink>
				<NavLink to={`/category/capuccino`} className={({ isActive}) => isActive ? 'ActiveOption': 'Option'}>Capuccino</NavLink>
				<NavLink to={`/category/licuado`} className={({ isActive}) => isActive ? 'ActiveOption': 'Option'}>Licuado</NavLink>
			</div>
			<CartWidget />
		</nav>
	)
}

export default NavBar