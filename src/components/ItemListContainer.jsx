import {useColorModeValue, Text} from "@chakra-ui/react";

const ItemListContainer = ({greeting}) => {

    return (
        <>
            <Text fontSize={'32px'} marginTop={'5rem'} textAlign='center' fontWeight={600} color={useColorModeValue('blue.800', 'gray.200')}>
                {greeting}
            </Text>        
        </>
    )
}

export default ItemListContainer