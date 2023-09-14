const products = [
	{
		id: '1',
		name: 'Cafe Expreso',
		price: 750,
		category: 'Cafe',
		img: './assets/img/cafe-espresso.jpg',
		description: 'Cafe intenso concentrado'
	},
	{ 
        id: '2', 
        name: 'Capuccino Moka', 
        price: 850, 
        category: 'Capuccino', 
        img: './assets/img/capuccino.jpg', 
        description: 'Cafe expreso, leche vaporizada y chocolate'
    },
	{
        id: '3', 
        name: 'Licuado frutal', 
        price: 1000, 
        category: 'Licuado', 
        img:'./assets/img/licuado.jpg', 
        description: 'Licuado con fruta a elección'
    },
]

export const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() = {
			resolve(products)
		}, 500)
	})
}