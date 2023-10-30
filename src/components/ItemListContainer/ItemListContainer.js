import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' 
import { getItems } from "../../services/products"

const ItemListContainer = ({ saludo }) => {
	const [products, setProducts] = useState([])

	const [loading, setLoading] = useState(false)

    const { categoryId } = useParams()


	useEffect(() => {
		setLoading(true)
	
		getItems(categoryId)
		  .then((snapshots) => {
			const products = snapshots.docs.map((snapshot) => ({ id: snapshot.id, ...snapshot.data() }))
			setProducts(products)
		  })
		  .catch(err => console.log({ err }))
		  .finally(() => setLoading(false))
	  }, [categoryId])
	


	return (
		<div>
			<h1>{saludo}</h1>
			<ItemList products={products} loading={loading}/>
		</div>
	)
}

export default ItemListContainer