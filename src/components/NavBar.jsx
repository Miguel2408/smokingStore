import CartWidget from './CartWidget';
import {useColorModeValue, Flex, Box, Spacer, Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Flex
        bg={useColorModeValue('blue.100', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        maxH={'70px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
      
        <Box p='4' borderRadius='md' bg='black'>
          <Text fontWeight={600} color={useColorModeValue('white', 'gray.200')}>
            SmokingStore
          </Text>
        </Box>
      
        <Box p='4'>
          <Menu isLazy>
            <MenuButton
              px={4}
              py={2}
              transition='all 0.2s'
              borderRadius='md'
              _hover={{ bg: 'blue.200', color: 'blue.400' }}
              _expanded={{ bg: 'blue.400', color: 'white'}}
              fontWeight={900}>
                Tobaccos
            </MenuButton>
            <MenuList>
                  <MenuItem _hover={{ bg: 'green.100' }} _focus={{ bg: 'green.100' }}>Tobacco A</MenuItem>
                  <MenuItem _hover={{ bg: 'green.100' }} _focus={{ bg: 'green.100' }}>Tobacco B</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box p='4'>
          <Menu isLazy>
            <MenuButton
              px={4}
              py={2}
              transition='all 0.2s'
              borderRadius='md'
              _hover={{ bg: 'blue.200', color: 'blue.400' }}
              _expanded={{ bg: 'blue.400', color: 'white'}}
              fontWeight={900}>
              Papers
            </MenuButton>
            <MenuList>
                  <MenuItem _hover={{ bg: 'green.100' }} _focus={{ bg: 'green.100' }}>Paper A</MenuItem>
                  <MenuItem _hover={{ bg: 'green.100' }} _focus={{ bg: 'green.100' }}>Paper B</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box p='4'>
          <Menu isLazy>
            <MenuButton
              px={4}
              py={2}
              transition='all 0.2s'
              borderRadius='md'
              _hover={{ bg: 'blue.200', color: 'blue.400' }}
              _expanded={{ bg: 'blue.400', color: 'white'}}
              fontWeight={900}>
                Filters
            </MenuButton>
            <MenuList>
                  <MenuItem _hover={{ bg: 'green.100' }} _focus={{ bg: 'green.100' }}>Filter A</MenuItem>
                  <MenuItem _hover={{ bg: 'green.100' }} _focus={{ bg: 'green.100' }}>Filter B</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box p='4'>
          <Menu isLazy>
            <MenuButton
              px={4}
              py={2}
              transition='all 0.2s'
              borderRadius='md'
              _hover={{ bg: 'blue.200', color: 'blue.400' }}
              _expanded={{ bg: 'blue.400', color: 'white'}}
              fontWeight={900}>
              Pipes
            </MenuButton>
            <MenuList>
                  <MenuItem _hover={{ bg: 'green.100' }} _focus={{ bg: 'green.100' }}>Pipe A</MenuItem>
                  <MenuItem _hover={{ bg: 'green.100' }} _focus={{ bg: 'green.100' }}>Pipe B</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box p='4'>
          <Menu isLazy>
            <MenuButton
              px={4}
              py={2}
              transition='all 0.2s'
              borderRadius='md'
              _hover={{ bg: 'blue.200', color: 'blue.400' }}
              _expanded={{ bg: 'blue.400', color: 'white'}}
              fontWeight={900}>
              Accessories
            </MenuButton>
            <MenuList>
                  <MenuItem _hover={{ bg: 'green.100' }} _focus={{ bg: 'green.100' }}>Accessory A</MenuItem>
                  <MenuItem _hover={{ bg: 'green.100' }} _focus={{ bg: 'green.100' }}>Accessory B</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Spacer />

        <Box p='4'>
          <CartWidget/>
        </Box>
      </Flex>
    </>
  )
}

export default NavBar
