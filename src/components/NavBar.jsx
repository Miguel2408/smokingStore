import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import {
    useColorModeValue,
    Flex,
    Box,
    Spacer,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";

const NavBar = () => {
    return (
        <>
            <Flex
                bg={useColorModeValue("blue.100", "gray.800")}
                color={useColorModeValue("gray.600", "white")}
                minH={"60px"}
                maxH={"70px"}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.900")}
                align={"center"}
            >
                <Link to="/">
                    <Box p="4" borderRadius="md" bg="black">
                        <Text
                            fontWeight={600}
                            color={useColorModeValue("white", "gray.200")}
                        >
                            SmokingStore
                        </Text>
                    </Box>
                </Link>
                <Box p="4">
                    <Menu isLazy>
                        <MenuButton
                            px={4}
                            py={2}
                            transition="all 0.2s"
                            borderRadius="md"
                            _hover={{ bg: "blue.200", color: "blue.400" }}
                            _expanded={{ bg: "blue.400", color: "white" }}
                            fontWeight={900}
                        >
                            Tabacos
                        </MenuButton>
                        <MenuList>
                            <Link to={`/category/${"tabaco-light"}`}>
                                <MenuItem
                                    _hover={{ bg: "green.100" }}
                                    _focus={{ bg: "green.100" }}
                                >
                                    Tabaco Light
                                </MenuItem>
                            </Link>
                            <Link to={`/category/${"tabaco-medium"}`}>
                                <MenuItem
                                    _hover={{ bg: "green.100" }}
                                    _focus={{ bg: "green.100" }}
                                >
                                    Tabaco Medium
                                </MenuItem>
                            </Link>
                            <Link to={`/category/${"tabaco-strong"}`}>
                                <MenuItem
                                    _hover={{ bg: "green.100" }}
                                    _focus={{ bg: "green.100" }}
                                >
                                    Tabaco Strong
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>

                <Box p="4">
                    <Menu isLazy>
                        <MenuButton
                            px={4}
                            py={2}
                            transition="all 0.2s"
                            borderRadius="md"
                            _hover={{ bg: "blue.200", color: "blue.400" }}
                            _expanded={{ bg: "blue.400", color: "white" }}
                            fontWeight={900}
                        >
                            Papel
                        </MenuButton>
                        <MenuList>
                            <Link to={`/category/${"papel-smoking"}`}>
                                <MenuItem
                                    _hover={{ bg: "green.100" }}
                                    _focus={{ bg: "green.100" }}
                                >
                                    Smoking
                                </MenuItem>
                            </Link>
                            <Link to={`/category/${"papel-ocb"}`}>
                                <MenuItem
                                    _hover={{ bg: "green.100" }}
                                    _focus={{ bg: "green.100" }}
                                >
                                    OCB
                                </MenuItem>
                            </Link>
                            <Link to={`/category/${"papel-libelula"}`}>
                                <MenuItem
                                    _hover={{ bg: "green.100" }}
                                    _focus={{ bg: "green.100" }}
                                >
                                    Libelula
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>

                <Box p="4">
                    <Menu isLazy>
                        <MenuButton
                            px={4}
                            py={2}
                            transition="all 0.2s"
                            borderRadius="md"
                            _hover={{ bg: "blue.200", color: "blue.400" }}
                            _expanded={{ bg: "blue.400", color: "white" }}
                            fontWeight={900}
                        >
                            Filtros
                        </MenuButton>
                        <MenuList>
                            <MenuItem
                                _hover={{ bg: "green.100" }}
                                _focus={{ bg: "green.100" }}
                            >
                                <Link to={`/category/${"filtro-ocb"}`}>OCB</Link>
                            </MenuItem>
                            <MenuItem
                                _hover={{ bg: "green.100" }}
                                _focus={{ bg: "green.100" }}
                            >
                                <Link to={`/category/${"filtro-gizeh"}`}>Gizeh</Link>
                            </MenuItem>
                            <MenuItem
                                _hover={{ bg: "green.100" }}
                                _focus={{ bg: "green.100" }}
                            >
                                <Link to={`/category/${"filtro-smoking"}`}>Smoking</Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>

                <Box p="4">
                    <Menu isLazy>
                        <MenuButton
                            px={4}
                            py={2}
                            transition="all 0.2s"
                            borderRadius="md"
                            _hover={{ bg: "blue.200", color: "blue.400" }}
                            _expanded={{ bg: "blue.400", color: "white" }}
                            fontWeight={900}
                        >
                            Pipas
                        </MenuButton>
                        <MenuList>
                            <MenuItem
                                _hover={{ bg: "green.100" }}
                                _focus={{ bg: "green.100" }}
                            >
                                <Link to={`/category/${"pipa-curva"}`}>Curva</Link>
                            </MenuItem>
                            <MenuItem
                                _hover={{ bg: "green.100" }}
                                _focus={{ bg: "green.100" }}
                            >
                                <Link to={`/category/${"pipa-recta"}`}>Recta</Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>

                <Box p="4">
                    <Menu isLazy>
                        <MenuButton
                            px={4}
                            py={2}
                            transition="all 0.2s"
                            borderRadius="md"
                            _hover={{ bg: "blue.200", color: "blue.400" }}
                            _expanded={{ bg: "blue.400", color: "white" }}
                            fontWeight={900}
                        >
                            Accesorios
                        </MenuButton>
                        <MenuList>
                            <MenuItem
                                _hover={{ bg: "green.100" }}
                                _focus={{ bg: "green.100" }}
                            >
                                <Link to={`/category/${"accesorios-encendedor"}`}>
                                    Encendedores
                                </Link>
                            </MenuItem>
                            <MenuItem
                                _hover={{ bg: "green.100" }}
                                _focus={{ bg: "green.100" }}
                            >
                                <Link to={`/category/${"accesorios-rolling"}`}>Rolers</Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>

                <Spacer />

                <Box p="4">
                    <CartWidget />
                </Box>
            </Flex>
        </>
    );
};

export default NavBar;
