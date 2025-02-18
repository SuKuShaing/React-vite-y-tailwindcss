import { useContext } from "react";
import { useEffect } from "react";
import { ShopppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
// import './App.css'

function MyOrder() {
    const context = useContext(ShopppingCartContext);
    const currentPath = window.location.pathname;
    // console.log(currentPath);
    // console.log("split: ", currentPath.split("/")); // ["", "my-orders", "last"]
    // console.log("split: ", currentPath.split("/")[2]); // last
    // console.log("lastIndexOf: ", currentPath.lastIndexOf("/")); // 10
    // console.log("substring: ", currentPath.substring(currentPath.lastIndexOf("/") + 1)); // last
    let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

    if (index === "last") {
        index = context.order?.length - 1;
    }

	useEffect(() => {
        // cerrar el menú lateral
        context.closeChechoutSideMenu();
        // carrito de compras en cero
        context.setCount(0);
    }, []);

	// const lastOrder = context.order?.slice(-1)[0];
	const lastOrder = context.order?.[index];
    // console.log("lastOrder:", lastOrder);

	return (
		<Layout>
            <div className="flex justify-between w-80 items-center mb-5">
				<Link to={"/my-orders"}>
					<ChevronLeftIcon className="size-6 text-black cursor-pointer" />
				</Link>
				<h1 className="grow text-center">My Order</h1>
			</div>
			<div className="flex flex-col flex-1 gap-2 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300">
				{lastOrder?.products?.length > 0 ? (
                    lastOrder.products
                    .slice()  // crea una copia del array original
                    .reverse() // invierte el orden
                    .map((product, index) => (
                        <OrderCard
                            key={`${product.id}-${index}-${Math.random().toFixed(5)}`}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            quantity={product.quantity}
                            id={product.id}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No hay productos que mostrar</p>
                )}
			</div>
		</Layout>
	);
}

export default MyOrder;
