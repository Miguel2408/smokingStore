import ItemDetail from './ItemDetail';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom/dist';
import GetProduct from './GetProduct';

const ItemDetailContainer = () => {

    const [ product,  setProduct ] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        GetProduct(id)
            .then((res) => {
                setProduct(res)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id])

    return (
        <>
            {product && <ItemDetail product={product} />}
        </>
    )
}

export default ItemDetailContainer