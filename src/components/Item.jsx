import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Item = ({id, name, price, image}) => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image src={image} alt='Just an image' borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>
                        $ {price}
                    </Text>
                </Stack>
                
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        <Link to={`/item/${id}`}>
                            Detail
                        </Link>
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default Item