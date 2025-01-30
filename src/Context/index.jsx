import { createContext, useState } from "react";

export const ShopppingCartContext = createContext();

// Creamos un contexto y lo tenemos que proveer a los demás y eso se hace con un provider que contenga (wrapper) a los demás componentes

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <ShopppingCartContext.Provider value={{
            count,
            setCount
        }}>
            { children }    
        </ShopppingCartContext.Provider>
    );
};