import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import  CartProvider  from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import CoffeInfo from './pages/CoffeInfo/CoffeInfo';


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<CartProvider>
					<NavBar/>
					<Routes>
						<Route path='/' element={<ItemListContainer saludo={"¡Bienvenid@! Estos son todos nuestros productos"}/>}/>
						<Route path='/category/:categoryId' element={<ItemListContainer saludo={"Nuestros productos por categoría"} />} />
						<Route path='/item/:itemId' element={ <ItemDetailContainer />}/>
						<Route path='/cart' element={<Cart/>} />
						<Route path='/checkout' element={<Checkout/>} />
						<Route path='/coffeInfo' element={<CoffeInfo/>} />
						<Route path='/category/:categoryId/coffeInfo' element={<CoffeInfo/>} />
						<Route path="*" element={<h1>404 NOT FOUND</h1>} />
					</Routes>
				</CartProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
