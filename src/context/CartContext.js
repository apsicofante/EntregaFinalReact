import { createContext, useState, useContext } from "react"


export const CartContext = createContext({
	cart: []
})

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	console.log(cart)

	const addItem = (products, qty) => {
		const newList = [...cart];
		if(isInCart(products.id)) {
			const productIndex = cart.findIndex(element=>element.id===products.id);
            newList[productIndex].quantity = newList[productIndex].quantity + qty;
            newList[productIndex].totalPrice = newList[productIndex].quantity * newList[productIndex].price;
            setCart(newList)
			
		} else {
			const newProduct={...products, quantity:qty, totalPrice: qty*products.price}
            const newList = [...cart];
            newList.push(newProduct);
            setCart(newList);
			
		}
	}

	const removeItem = (productsId) => {
		const cartUpdated = cart.filter(prod => prod.id !== productsId)
		setCart(cartUpdated)
	}

	const clearCart = () => {
		setCart([])
	}


	
    const totalQuantity = cart.reduce((acc,item)=>acc + item.quantity,0);
    
	const getTotal = () => parseFloat(cart.reduce((acc, current) => acc + current?.totalPrice, 0)).toFixed(2)

	const isInCart = (itemId) => {
		return cart.some (prod => prod.id === itemId)
	}

	return (
		<CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total: getTotal () }}>
			{ children }
		</CartContext.Provider>
	)
}

export const useCart = () => useContext(CartContext)

export default CartProvider