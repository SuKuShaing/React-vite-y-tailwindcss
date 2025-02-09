import { useContext } from "react";
import { ShopppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";

const CheckoutSideMenu = () => {
	const context = useContext(ShopppingCartContext);

	console.log("cart: ", context.cartProducts);

	return (
		<aside
			className={`${
				context.isChechoutSideMenuOpen ? "flex" : "hidden"
			} checkout-side-menu top-20 flex-col gap-2 fixed right-0 border border-black rounded bg-white p-5`}
		>
			<div className="flex justify-between items-center">
				<h2 className="font-medium text-xl">My Order</h2>
				<div className="flex justify-between gap-2 items-center">
					<p className="font-medium text-xl">
						Total: $
						{
                        context.cartProducts.length > 0 ?
                        context.cartProducts.reduce((acc, product) => {
							return acc + product.price * product.quantity;
						}, 0) 
                        : 0
                        }
					</p>
					<div
						className="cursor-pointer"
						onClick={context.closeChechoutSideMenu}
					>
						<XMarkIcon className="h-5 w-5" />
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-2 scrollable-cards">
				{context.cartProducts.map((product, index) => {
					return (
						<OrderCard
							key={`${product.id}-${index}-${Math.random().toFixed(5)}`}
							title={product.title}
							imageUrl={product.images}
							price={product.price}
							quantity={product.quantity}
						/>
					);
				})}
			</div>
		</aside>
	);
};

export default CheckoutSideMenu;
