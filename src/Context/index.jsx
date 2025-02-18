import { createContext, useState, useEffect  } from "react";

export const ShopppingCartContext = createContext();

// Creamos un contexto y lo tenemos que proveer a los demás y eso se hace con un provider que contenga (wrapper) a los demás componentes

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);
    
    // Shopping Cart - add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    // Product Details - Open / close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Checkout Side Menu - Open / close
    const [isChechoutSideMenuOpen, setIsChechoutSideMenuOpen] = useState(false);
    const openChechoutSideMenu = () => setIsChechoutSideMenuOpen(true);
    const closeChechoutSideMenu = () => setIsChechoutSideMenuOpen(false);

    // Product Details - Show product details
    const [productToShow, setProductToShow] = useState({});
    
    // Shopping Cart - Order
    const [order, setOrder] = useState([]);

    // Get Products
    const [items, setItems] = useState(null);

    // Search by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    console.log(searchByTitle);

    useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
			.then((response) => response.json())
			.then((data) => {
				setItems(data);
			});
	}, []);


    return (
        <ShopppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isChechoutSideMenuOpen,
            openChechoutSideMenu,
            closeChechoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            { children }    
        </ShopppingCartContext.Provider>
    );
};