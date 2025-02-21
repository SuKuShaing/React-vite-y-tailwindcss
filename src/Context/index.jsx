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

    // Filtered Items
    const [filteredItems, setFilteredItems] = useState(null);

    // Search by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    
    // Search by category
    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
			.then((response) => response.json())
			.then((data) => {
				setItems(data);
			});
	}, []);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    };

    useEffect(() => {
        if (searchByTitle) {
            setFilteredItems(filteredItemsByTitle(items, searchByTitle));
        }
    }, [items, searchByTitle]);
    
    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
    };

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle);
        }
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory);
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(filteredItemsByTitle(items, searchByTitle), searchByCategory);
        }
        if (!searchType) { // !searchType es lo mismo que decir searchType === null
            return items;
        }
    };
    
    useEffect(() => {
        if (searchByTitle && searchByCategory) {setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))}
        if (searchByTitle && !searchByCategory) {setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))}
        if (!searchByTitle && searchByCategory) {setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))}
        if (!searchByTitle && !searchByCategory) {setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))}
    }, [items, searchByTitle, searchByCategory]);

    
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
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            { children }    
        </ShopppingCartContext.Provider>
    );
};