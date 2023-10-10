import { FiShoppingCart } from "react-icons/fi";
import { Stack, Highlight } from "@chakra-ui/react";
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react';
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { calculateTotalAmount } = useContext(CartContext)

    return (
        <>
            <Stack
                flex={{ base: 1, md: 0 }}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}>
                <Link to={`/cart`}>
                    <div style={{ margin: "auto" }}>
                        <FiShoppingCart size="24px" />
                    </div>
                </Link>
                <Highlight
                    query={calculateTotalAmount().toString()}
                    styles={{ px: '3', py: '1', rounded: 'full', bg: 'blue.200' }}>
                    {calculateTotalAmount().toString()}
                </Highlight>
            </Stack>
        </>
    )
}

export default CartWidget