import ShoppingCartContext from "./context/ShoppingCartContext"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import Cart from "./components/Cart"
import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
    return (
        <>
            <ShoppingCartContext>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route exact path='/' element={<ItemListContainer />} />
                        <Route exact path='/category/:category' element={<ItemListContainer />} />
                        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
                        <Route exact path='/cart' element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </ShoppingCartContext>
        </>
    )
}

export default App