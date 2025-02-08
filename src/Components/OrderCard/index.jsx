import { TrashIcon } from "@heroicons/react/24/outline";

const OrderCard = (props) => {
	const { title, imageUrl, price, quantity } = props;

	return (
		<div className="flex justify-between items-center">
			<div className="flex items-center gap-2">
				<figure className="size-20">
					<img
						className="w-full h-full rounded-lg object-cover"
						src={imageUrl}
						alt={`imagen de ${title}`}
					/>
				</figure>
				<div className="flex flex-col gap-1">
					<p className="text-sm font-light">{title}</p>
					<p className="text-sm font-light">{quantity} x ${price}</p>
				</div>
			</div>
			<div className="flex items-center gap-2">
				<p className="text-lg font-medium">${quantity * price}</p>
				<TrashIcon className="h-5 w-5 cursor-pointer" />
			</div>
		</div>
	);
};

export default OrderCard;
