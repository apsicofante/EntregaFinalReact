import espresso from "./assets/img/cafe-espresso.jpg"
import capuccino from "./assets/img/capuccino.jpg"
import licuado from "./assets/img/licuado.jpg"

export const products = [
	{
		id: '1',
		name: 'Cafe Expreso',
		price: 750,
		category: 'cafe',
		img:  espresso  ,
		description: 'Cafe intenso concentrado'
	},
	{ 
        id: '2', 
        name: 'Capuccino Moka', 
        price: 850, 
        category: 'capuccino', 
        img:  capuccino , 
        description: 'Cafe expreso, leche vaporizada y chocolate'
    },
	{
        id: '3', 
        name: 'Licuado frutal', 
        price: 1000, 
        category: 'licuado', 
        img: licuado , 
        description: 'Licuado con fruta a elección'
    },
]

export const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products)
		}, 500)
	})
}

export const getProductById = (productId) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products.find(prod => prod.id === productId))
		}, 500)
	})
}

export const getProductsByCategory = (productCategory) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products.filter(prod => prod.category === productCategory))
		}, 300)
	})
}

