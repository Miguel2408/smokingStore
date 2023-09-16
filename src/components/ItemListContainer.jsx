import ItemList from './ItemList';
import GetProducts from './GetProducts'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/dist';

const ItemListContainer = () => {

    const [products, setProductos] = useState([])
    const [title, setTitle] = useState('Products')
    const { category } = useParams()


    useEffect(() => {
        GetProducts()
            .then((res) => {
                if (category) {
                    setProductos(res.filter((product) => product.category == category));
                    setTitle(category)
                } else {
                    setProductos(res)
                    setTitle('Products')
                }
            })
    }, [category, title])

    return (
        <>
            <ItemList products={products} title={title} />
        </>
    )
}

export default ItemListContainer