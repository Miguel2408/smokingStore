import { Flex, IconButton, Box, Stack, Text, useColorModeValue as mode, Image} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react';

const CartItem = ({item}) => {

    const { removeProduct } = useContext(CartContext)

    const deleteItem = () => {
        removeProduct(item.product.id)
    }

    return (
        <>
            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
                <Stack direction="row" spacing="5" width="full">
                    <Image
                        rounded="lg"
                        width="120px"
                        height="120px"
                        fit="cover"
                        src={item.product.image}
                        alt={item.product.name}
                        draggable="false"
                        loading="lazy"
                    />
                    <Box pt="4">
                        <Stack spacing="0.5">
                            <Text fontWeight="bold">{item.product.name}</Text>
                            <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
                                {item.product.description}
                            </Text>
                        </Stack>
                    </Box>
                </Stack>
                <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
                    <Stack spacing="0.5">
                        <Text fontWeight="bold">Quantity</Text>
                        <Text align="center" fontWeight="medium">{item.quantity}</Text>
                    </Stack>
                    <Stack spacing="0.5">
                        <Text fontWeight="bold">Price</Text>
                        <Text fontWeight="medium">${item.product.price}</Text>
                    </Stack>
                    <Stack spacing="0.5">
                        <Text fontWeight="bold">SubTotal</Text>
                        <Text fontWeight="medium">${item.product.price*item.quantity}</Text>
                    </Stack>
                    <IconButton onClick={deleteItem} icon={<DeleteIcon />} />
                </Flex>
            </Flex>
        </>
    )
}

export default CartItem