import './ItemList.css'
import Item from '../Item/Item.js'
import InfoAside from '../InfoAside/InfoAside'

const ItemList = ({products }) => {
	return(
		<>
		<div className='ListGroup'>
			{products.map(prod => <Item key={prod.id} {...prod} />)}
		</div>
		<div>
			<InfoAside/>
		</div>
		</>
	)
}

export default ItemList