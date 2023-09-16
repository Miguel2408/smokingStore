import Item from './Item';
import { Flex, Grid, Text } from '@chakra-ui/react';


const ItemList = ({ products, title }) => {
    return (
        <>
            <Text as='b' fontSize='2xl'>{title.toLowerCase()
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </Text>
            <Flex
                alignItems='rigth'

                maxW={{ xl: "90%" }}
                m="0 auto"
                minH="50vh"
            >
                <Grid
                    w="full"
                    gridGap="6"
                    gridTemplateColumns="repeat( auto-fit, minmax(250px, 1fr) )"
                >
                    {products.map((product) => {
                        return (
                            <Item
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        )
                    })}
                </Grid>
            </Flex>
        </>

    )
}

export default ItemList