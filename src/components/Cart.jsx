import { Box, Stack, Flex, Heading, Button, Text, useColorModeValue as mode, HStack, Link} from '@chakra-ui/react';
import { CartContext } from '../context/ShoppingCartContext'
import CartItem from './CartItem'
import { useContext, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import OrderForm  from './OrderForm';

const Cart = () => {

    const { calculateTotalAmount, cart, clear} = useContext(CartContext)
    const [hidden, setHidden] = useState(false)

    return (
        <>
            <Box
                maxW={{ base: '3xl', lg: '7xl' }}
                mx="auto"
                px={{ base: '4', md: '8', lg: '12' }}
                py={{ base: '6', md: '8', lg: '12' }}
            >
                <Stack
                direction={{ base: 'column', lg: 'row' }}
                align={{ lg: 'flex-start' }}
                spacing={{ base: '8', md: '16' }}
                >
                <Stack spacing={{ base: '8', md: '10' }} flex="2">
                    <Heading fontSize="2xl" fontWeight="extrabold">
                        Shopping Cart ({calculateTotalAmount()}) items
                    </Heading>

                    <Stack spacing="6">
                    {
                        cart.map((item) => {
                            return (
                                <CartItem key={item.product.id} item={item} />
                            )
                        })
                    }
                    </Stack>
                </Stack>
                {cart.length > 0 ? <>
                    <Flex direction="column" align="center" flex="1">
                        <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
                            <Heading size="md">Order Summary</Heading>

                            <Stack spacing="6">
                                <Flex justify="space-between">
                                    <Text fontSize="lg" fontWeight="semibold">
                                        Total
                                    </Text>
                                    <Text fontSize="xl" fontWeight="extrabold">
                                    {cart.reduce((total, item) => total += (item.product.price * item.quantity), 0)}
                                    </Text>
                                </Flex>
                            </Stack>
                            {!hidden ? 
                                <Button onClick={() => setHidden(true)} colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
                                    Checkout
                                </Button> :
                                <> 
                                    <OrderForm />
                                    <Button onClick={() => setHidden(false)} colorScheme="blue" size="lg" fontSize="md" leftIcon={<FaArrowLeft />}>
                                        Back
                                    </Button>
                                </>
                            }
                        </Stack>
                        <HStack mt="6" fontWeight="semibold">
                        <p>or</p>
                        <Link onClick={clear} color={mode('blue.500', 'blue.200')}>Clear your cart</Link>
                        </HStack>
                    </Flex>
                    </>: <></>
                }
                </Stack>
            </Box>
        </>
        
    )
}

export default Cart