import { Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { AddIcon,  MinusIcon } from '@chakra-ui/icons'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext, useState } from 'react';

const ItemCount = ({product}) => {

    const { addProduct } = useContext(CartContext)
    const [counter, setCounter] = useState(1);
    const [added, setAdded] = useState(false)

    const increment = () => {
        if(counter < 10) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if(counter > 0) {
            setCounter(counter - 1)
        }
    }

    const onAdd = () => {        
        addProduct(product, counter)
        setAdded(true)
        setTimeout(() => {
            setAdded(false)
        }, 2000)
    }
    
    return (
        <>
            
                <>
                {!added &&
                    <ButtonGroup size='md' isAttached variant='outline'>
                        <IconButton onClick={decrement} icon={<MinusIcon />} />
                        <Button>{counter}</Button>
                        <IconButton onClick={increment} icon={<AddIcon />} />
                    </ButtonGroup>}
                    
                    <Button onClick={onAdd} variant='solid' cursor={added ? 'not-allowed' : ''} colorScheme={added ? 'green' : 'blue'}>
                        {added ? "Added!" : "Add To Cart"}  
                    </Button>
                </>
         
            </>
    )

}

export default ItemCount