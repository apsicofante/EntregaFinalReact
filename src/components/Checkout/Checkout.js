import { useState } from 'react'
//import { CartContext } from '../../context/CartContext'
//import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from 'firebase/firestore'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
//import { db } from "../../services/firebase/firebaseConfig"


const Checkout = () => {
	const [loading, setLoading] = useState(false)
	//const [orderId, setOrderId] = useState('')

	// const { cart, total } = CartContext()

	const createOrder = async ({ name, phone, email }) => { 
		try {
			setLoading(true)
			// const objOrder = { 
			// 	buyer: {
			// 		name, phone, email
			// 	},
			// 	items: cart,
			// 	total: total,
				
			// }

	// 		const batch = writeBatch(db)

	// 		const outOfStock = []

	// 		const ids = cart.map(prod => prod.id)

	// 		const productsRef = collection (db, 'products')

	// 		const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
			
	// 		const { docs } = productsAddedFromFirestore

	// 		docs.forEach(doc => {
	// 			const dataDoc = doc.data()
	// 			const stockDb = dataDoc.stock

	// 			const productAddedToCart = cart.find(prod => prod.id === doc.id)
	// 			const prodQuantity = productAddedToCart?.quantity

	// 			if(stockDb >= prodQuantity) {
	// 				batch.update(doc.ref, { stock: stockDb - prodQuantity })
	// 			} else {
	// 				outOfStock.push({ id: doc.id, ...dataDoc})

	// 			}
	// 		})

	// 		if(outOfStock.length === 0) {
	// 			await batch.commit()

	// 			const orderRef = collection(db, 'orders')

	// 			const orderAdded = await addDoc(orderRef, objOrder)

	// 			setOrderId(orderAdded.id)
	// 			clearCart()
	// 		} else {
	// 			console.error ('Hay productos que estan fuera de stock')
	// 		}

		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}

	}

	if(loading) {
		return <h1>Se esta generando su orden...</h1>
	}

	// if(CheckoutForm) {
	// 	return <h1>El id de su orden es: {"XXXXXX"}</h1>
	// }

	return (
		<div>
			<h1>Checkout</h1>
			<CheckoutForm onConfirm={createOrder}/>
		</div>
	)
}

export default Checkout
