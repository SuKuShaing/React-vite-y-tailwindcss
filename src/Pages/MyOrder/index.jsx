import { useContext } from "react";
import { useEffect } from "react";
import { ShopppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import Layout from "../../Components/Layout";
// import './App.css'

function MyOrder() {
    const context = useContext(ShopppingCartContext);

	useEffect(() => {
        context.closeChechoutSideMenu();
    }, []);

	const lastOrder = context.order?.slice(-1)[0];

	return (
		<Layout>
			Hola Mundo bebé, soy MyOrder
			<div className="flex flex-col flex-1 gap-2 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300">
				{lastOrder?.products?.length > 0 ? (
                    lastOrder.products.map((product, index) => (
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
