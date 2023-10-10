import ItemDetail from './ItemDetail';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom/dist';
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { Skeleton } from '@chakra-ui/react';

const ItemDetailContainer = () => {

    const [ product,  setProduct ] = useState(null);
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        const db = getFirestore();
        const oneProduct = doc(db, 'products', id);

        getDoc(oneProduct).then((snapshot) => {
          if (snapshot.exists()) { // Corrected typo: snapshot.exists()
            setProduct({ ...snapshot.data(), id: snapshot.id });
        }
        setLoading(false);
        });
    }, [id]);


    if(loading){
        return <Skeleton startColor='blue' endColor='green.500' height='30px' />
    }

    return (
        <>
            {product && <ItemDetail product={product} />}
        </>
    )
}

export default ItemDetailContainer