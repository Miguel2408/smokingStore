import {Image, ButtonGroup,  Button, Divider, Center, Card, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {
    return (
      <>
        <Center p='1rem'>
            <Card size='lg' align='center'>
                <CardHeader>
                    <Heading size='md'>{product.name}</Heading>
                </CardHeader>
                <CardBody>
              
                        <div>
                            <Image src={product.image} alt='Just an image' borderRadius='lg' />
                            <Text as='i'>{product.description}</Text>
                            <br />
                            <Text as='b'>${product.price}</Text>
                        </div>
          
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ItemCount/>
                        <Button variant='solid' colorScheme='blue'>
                            Add To Cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </Center>
</>
    )
}

export default ItemDetail