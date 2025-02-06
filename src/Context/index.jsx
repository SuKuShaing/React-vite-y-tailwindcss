import { createContext, useState } from "react";

export const ShopppingCartContext = createContext();

// Creamos un contexto y lo tenemos que proveer a los demás y eso se hace con un provider que contenga (wrapper) a los demás componentes

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);

    // Product Details - Open / close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Product Details - Show product details
    const [productToShow, setProductToShow] = useState({});

    return (
        <ShopppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            { children }    
        </ShopppingCartContext.Provider>
    );
};