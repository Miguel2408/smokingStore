import { FiShoppingCart } from "react-icons/fi";
import { Stack, Highlight } from "@chakra-ui/react";

const CartWidget = () => {
    return (
        <>
            <Stack
                flex={{ base: 1, md: 0 }}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}>
                <div style={{ margin: "auto" }}>
                    <FiShoppingCart size="24px" />
                </div>
                <Highlight
                    query='5'
                    styles={{ px: '3', py: '1', rounded: 'full', bg: 'blue.200' }}>
                    5
                </Highlight>
            </Stack>
        </>
    )
}

export default CartWidget