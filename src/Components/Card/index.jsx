import { useContext } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { ShopppingCartContext } from "../../Context";

const Card = (data) => {
	const context = useContext(ShopppingCartContext);

	const showProduct = (productDetail) => {
		context.closeChechoutSideMenu();
		context.openProductDetail();
		context.setProductToShow(productDetail);
	};

	const addProductsToCart = (event, productData) => {
		context.closeProductDetail();
		// verifica si el producto ya está en el carrito
		const productIndex = context.cartProducts.findIndex(
			(product) => product.id === productData.id
		);
		if (productIndex !== -1) {
			context.cartProducts[productIndex].quantity += 1;
			context.setCartProducts([...context.cartProducts]);
		} else {
			context.setCartProducts([
				...context.cartProducts,
				{ ...productData, quantity: 1 },
			]);
		}
		// context.setCartProducts([...context.cartProducts, productData]);
		context.setCount(context.count + 1); // incrementa el contador global de productos
		context.openChechoutSideMenu();
		event.stopPropagation(); // evita que el evento se propague al padre, es decir, que solo se agregue al carrito y que no se abra el modal de detalle del producto
	};

	const renderIcon = (id) => {
		const isInCart = context.cartProducts.some((product) => product.id === id);

		if (isInCart) {
			return (
				<div
				className="absolute top-0 right-0 flex justify-center items-center bg-green-200 size-6 rounded-full m-2 hover:bg-white/80 transition-all"
				onClick={(event) => event.stopPropagation()}
				// te traes el contexto del provider con "context", usa el método "setCount", context.count es el valor actual de "count" y le sumas 1
				>
					<CheckIcon className="size-3.5" />
				</div>
			);
		}
		else {
			return (
				<div
					className="absolute top-0 right-0 flex justify-center items-center bg-white size-6 rounded-full m-2 hover:bg-white/80 transition-all"
					onClick={(event) => addProductsToCart(event, data.data)}
					// te traes el contexto del provider con "context", usa el método "setCount", context.count es el valor actual de "count" y le sumas 1
				>
					<PlusIcon className="size-3.5" />
				</div>
			);
		};
	};

	return (
		<div
			className="bg-white cursor-pointer w-56 h-60 rounded-lg"
			onClick={() => showProduct(data.data)}
		>
			<figure className="relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3  py-2">
					{data.data.category.name}
				</span>
				<img
					src={data.data.images[0]}
					alt={data.data.title}
					className="size-full object-cover rounded-lg"
				/>
				{renderIcon(data.data.id)}
			</figure>
			<p className="flex justify-between">
				<span className="text-sm font-light">{data.data.title}</span>
				<span className="text-sm font-medium">${data.data.price}</span>
			</p>
		</div>
	);
};

export default Card;
