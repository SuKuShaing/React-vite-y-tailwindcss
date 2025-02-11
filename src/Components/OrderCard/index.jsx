import { useContext } from "react";
import { ShopppingCartContext } from "../../Context";
import { TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

// OrderCard component va dentro de CheckoutSideMenu, son los productos que se van a comprar

const OrderCard = (props) => {
	const context = useContext(ShopppingCartContext);
	const { title, imageUrl, price, quantity, handleDelete, id } = props;

	const restarUno = (id) => {
		const productIndex = context.cartProducts.findIndex(
			(product) => product.id === id
		);
		const newCartProducts = [...context.cartProducts];
		newCartProducts[productIndex].quantity -= 1;
		if (newCartProducts[productIndex].quantity === 0) {
			handleDelete(id);
			return;
		} else {
			context.setCartProducts(newCartProducts);
		}
	};

	const sumarUno = (id) => {
		const productIndex = context.cartProducts.findIndex(
			(product) => product.id === id
		);
		const newCartProducts = [...context.cartProducts];
		newCartProducts[productIndex].quantity += 1;
		context.setCartProducts(newCartProducts);
	};

	let renderXMarkIcon
	if (handleDelete) {
		renderXMarkIcon = (
			<div
				onClick={() => handleDelete(id)}
				className="bg-gray-100 hover:bg-gray-200 rounded-sm cursor-pointer"
			>
				<TrashIcon className="m-0.5 size-4" />
			</div>
		);
	}

	return (
		<div className="flex justify-between gap-1 items-center">
			<figure className="size-20 aspect-square">
				<img
					className="w-full h-full rounded-lg object-cover"
					src={imageUrl}
					alt={`imagen de ${title}`}
				/>
			</figure>
			<div className="flex flex-col w-full h-full justify-around">
				<p className="text-sm font-light">{title}</p>
				<div className="flex justify-between items-center">
					<div className="flex justify-between items-center gap-1 w-1/2">
						<div
							onClick={() => restarUno(id)}
							className="bg-gray-100 hover:bg-gray-200 rounded-sm cursor-pointer"
						>
							<MinusIcon className="m-0.5 size-4" />
						</div>
						<p className="text-sm font-light my-1">{quantity}</p>
						<div
							onClick={() => sumarUno(id)}
							className="bg-gray-100 hover:bg-gray-200 rounded-sm cursor-pointer"
						>
							<PlusIcon className="m-0.5 size-4" />
						</div>
						<p className="text-sm font-light">x ${price}</p>
					</div>
					{renderXMarkIcon}
				</div>
			</div>
		</div>
	);
};

export default OrderCard;
