import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { useContext } from "react";
import { ShopppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
// import './App.css'

function MyOrders() {
	const context = useContext(ShopppingCartContext);
	// console.log(context.order);

	return (
		<Layout>
			<div className="flex justify-between w-80 items-center">
				<h1 className="grow text-center">My Orders</h1>
			</div>
			{ context.order.length === 0 && <p className="text-center text-gray-500">No hay ordenes que mostrar</p> }
			{context.order.map((order, index) => (
				<Link key={index} to={`/my-orders/${index}`}>
					<OrdersCard
						date={order.date}
						totalPrice={order.totalPrice}
						totalProducts={order.totalProducts}
						products={order.products}
					/>
				</Link>
			))}
		</Layout>
	);
}

export default MyOrders;
