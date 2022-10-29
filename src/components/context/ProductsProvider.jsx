import { createContext, useState, useContext } from "react"

const ProductsContext = createContext();


const ProductsProvider = ({ children }) => {
   
    const [cartItems, setCartItems] = useState([]);

    /*Add product function*/

    const addProduct = (product) => {
        const productExist = cartItems.find(item => item.id === product.id);
        if (productExist) {
            setCartItems(cartItems.map(item => item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item))
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }])
        }
    }


    /*Remove cart qty product*/

    const handleItemRemove = (product) => {
        const productExist = cartItems.find(item => item.id === product.id);
        if (productExist.qty === 1) {
            setCartItems(cartItems.filter(item => item.id !== product.id))
        } else {
            setCartItems(cartItems.map(item => item.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : item))
        }
    }

    /*Clear cart*/

    const clearCart = () => {
        setCartItems([])
    }


    return (
        <ProductsContext.Provider
            value={{
                cartItems,
                addProduct,
                handleItemRemove,
                clearCart
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export { ProductsProvider }

export default ProductsContext


export const useProducts = () => {
    return useContext(ProductsContext)
}


