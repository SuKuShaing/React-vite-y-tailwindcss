import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
// import './App.css'

function Home() {
	const [items, setItems] = useState(null);

	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
			.then((response) => response.json())
			.then((data) => {
				setItems(data);
				console.log(data);
			});
	}, []);

	return (
		<Layout>
			Hola Mundo bebé, soy el Home
			<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
				{items?.map((item) => (
					<Card key={item.id} data={item} />
				))}
			</div>
		</Layout>
	);
}

export default Home;
