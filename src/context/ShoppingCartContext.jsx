import {createContext, useState} from 'react'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const [orderId, setOrderId] = useState("")
    
    const isInCart = (id) => {

        return cart.some(cartItem => {
            if (cartItem.product.id === id) {
                return true;
            }
        
            return false;
        });
    }

    const calculateTotalAmount = () => {
        return cart.reduce((total, item) => total += item.quantity, 0)
    }

    const addProduct = (product, quantity) => {        
    
        if(isInCart(product.id)) {
            cart.map((cartItem) => {
                if(cartItem.product.id === product.id){
                    cartItem.quantity+=quantity
                }
            })
        }
        else{ 
            cart.push(
                {"product": product, "quantity": quantity}
            )
        }
        setCart(cart)
        setTotalAmount(calculateTotalAmount())
    }

    const removeProduct = (productId) => {        
   
        const newCart = cart.map(item => {
            if (item.product.id === productId) {

                if (item.quantity > 1) {
                    return { "product": item.product, "quantity": item.quantity - 1 };
                }

                return null;

            }
            return item;
        }).filter(Boolean);

        setCart(newCart);
        setTotalAmount(calculateTotalAmount())
    }

    const clear = () => {        
        setCart([]);
        setTotalAmount(0)
    }


    return(
        <CartContext.Provider value={{cart, setCart, totalAmount, setTotalAmount, calculateTotalAmount, isInCart, addProduct, removeProduct, clear, orderId, setOrderId}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider