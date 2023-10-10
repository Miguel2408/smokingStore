import { useState, useContext } from "react";
import { Stack, Box, Flex, Button, Input, InputGroup, InputLeftAddon, Spinner, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { CartContext } from '../context/ShoppingCartContext'

const OrderForm = () => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { cart, setOrderId, orderId, clear } = useContext(CartContext)
  
    const db = getFirestore()

    const orderCollection = collection(db, 'orders')

    
    const order = {
        usert:{ name, email },
        items: cart
    }

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        if(name === "" ||  email === "") {
            setError(true)
            return
        }

        addDoc(orderCollection, order).then(({id})=>{
            setOrderId(id)
            setLoading(false)
            onOpen()
            
        })
    }

    const closeModal = () => {
        setOrderId("")
        onClose()
        clear()
    }

    if(loading){
        return  <center><Spinner size='xl' /></center>
    }

    return (
        <>{!orderId ?
            <form onSubmit={handleSubmit}>
                <Stack spacing="6">
                    <Flex justify="space-between">
                    <InputGroup>
                        <InputLeftAddon children='Name' />
                        <Input onChange={(e) => setName(e.target.value)} type="text" borderColor={error && name === "" ? 'red' : ''}/>
                    </InputGroup>
                        
                    </Flex>
                    <Flex justify="space-between">
                        <InputGroup>
                            <InputLeftAddon children={'Email'} />
                            <Input onChange={(e) => setEmail(e.target.value)} type="email" borderColor={error && email === "" ? 'red' : ''}/>
                        </InputGroup>
                    </Flex>
                    <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
                        Finish Purchase
                    </Button> 
                </Stack>
            </form> :
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>                       
                    <Box bg='green.500' w='100%' p={4} color='white'>
                        <p>Thank You!!</p> 
                        <p>Your purchase has been successfull!</p>
                    </Box>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box bg='blue.100' w='100%' p={4} color='grey'>
                        <p>Here is your order ID: {orderId}</p> 
                    </Box>  
                </ModalBody>
        
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={closeModal}>
                    Close
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
            }
        </>
    );
};

export default OrderForm;
