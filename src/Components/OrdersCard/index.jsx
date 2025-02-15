import { useContext } from "react";
import { ShopppingCartContext } from "../../Context";
import { TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";


const OrdersCard = (props) => {
	// const context = useContext(ShopppingCartContext);
	const { products, date, totalPrice, totalProducts } = props;
	// console.log("products: ", products);

	return (
		<div className="flex flex-col gap-2 rounded border border-black p-2 m-2 w-60">
            <p className="flex gap-3 items-center">
                <span>{date}</span>
                <span>Products: {totalProducts}</span>
                <span className="font-semibold">${totalPrice}</span>
            </p>
			<div className="flex gap-2 justify-center  overflow-x-auto [&::-webkit-scrollbar]:h-0 w-full">
				{
					products.map((product, index) => (
						<img 
						key={`${product.title}-${index}-${Math.random().toFixed(5)}`}
						className="size-10 rounded-sm"
						src={product.images[0]} 
						alt={product.title} 
						/>
					))
				}
			</div>
		</div>
	);
};

export default OrdersCard;
