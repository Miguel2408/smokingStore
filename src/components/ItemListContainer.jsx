import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/dist';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { Skeleton } from '@chakra-ui/react';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [title, setTitle] = useState('Products')
    const [loading, setLoading] = useState(true)
    const { category } = useParams()


    useEffect(() => {
        setLoading(true)

        const db = getFirestore()
        const productsCollection = collection(db, 'products')

        const collectionQuery = category ? query(productsCollection, where('category', '==', category)) : productsCollection;

        getDocs(collectionQuery).then((snapshot)=>{
            
            const docs = snapshot.docs.map((doc) => {
                const data = doc.data();
                const id = doc.id;
                return { id, ...data };
            });
            if (category) {
                
                setTitle(category)
            } else {
                
                setTitle('Products')
            }
            setProducts(docs)
            setLoading(false)
        })
    }, [category, title])

    if(loading){
        return <Skeleton startColor='blue' endColor='green.500' height='30px' />
    }

    return (
        <> 
            <ItemList products={products} title={title} />
        </>
    )
}

export default ItemListContainer