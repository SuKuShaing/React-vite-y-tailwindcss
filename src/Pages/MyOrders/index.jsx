import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { useContext } from "react";
import { ShopppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
// import './App.css'

function MyOrders() {
	const context = useContext(ShopppingCartContext);

	return (
		<Layout>
			<div className="flex justify-between w-80 items-center">
				<h1 className="grow text-center">My Orders</h1>
			</div>
			{context.order.map((order, index) => {
				<Link key={index} to={`/my-orders/${order.id}`}>
					<OrdersCard
						totalPrice={order.totalPrice}
						totalProducts={order.totalProducts}
					/>
				</Link>;
			})}
		</Layout>
	);
}

export default MyOrders;
