import { useContext } from "react";
import { ShopppingCartContext } from "../../Context";
import { TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";


const OrdersCard = (props) => {
	// const context = useContext(ShopppingCartContext);
	const { totalPrice, totalProducts } = props;

	return (
		<div className="flex justify-between gap-1 items-center rounded border border-black p-2">
            <p>
                <span>01.02.23</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
		</div>
	);
};

export default OrdersCard;
