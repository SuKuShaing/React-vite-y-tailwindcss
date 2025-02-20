import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetails from "../../Components/ProductDetails";
import { ShopppingCartContext } from "../../Context";

function Home() {
	const context = useContext(ShopppingCartContext);

	const renderView = () => {
		if (context.searchByTitle?.length > 0) {
			if (context.filteredItems?.length > 0) {
				return (
					context.filteredItems?.map((item) => (
						<Card key={item.id} data={item} />
					))
				)
			} else {
				return (
					<div className="w-full text-center">No products found</div>
				)
			}
		} else {
			return (
				context.filteredItems?.map((item) => (
					<Card key={item.id} data={item} />
				))
			)
		}
	};

	return (
		<Layout>
			<div className="flex justify-between w-80 items-center">
				<h1 className="grow text-center">Exclusive Products</h1>
			</div>
			<input 
				type="text" 
				placeholder="Search a Product" 
				className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-offset-1"
				onChange={(event) => {context.setSearchByTitle(event.target.value)}}
			/>
			<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
				{renderView()}
			</div>
			<ProductDetails />
		</Layout>
	);
}

export default Home;
