import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";

import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";

import "./App.css";

const AppRoutes = () => {
	let routes = useRoutes([
		{ path: "/", element: <Home /> },
		{ path: "/my-account", element: <MyAccount /> },
		{ path: "/my-order", element: <MyOrder /> },
		{ path: "/my-orders", element: <MyOrders /> },
		{ path: "/sign-in", element: <SignIn /> },
		{ path: "/*", element: <NotFound /> },
	]);

	return routes;
};

const App = () => {
	return (
		<ShoppingCartProvider>
			{/* // con encapsular el componente AppRoutes en el componente BrowserRouter, se habilita el uso de rutas en la aplicación */}
			<BrowserRouter>
				<Navbar />
				<AppRoutes />
			</BrowserRouter>
		</ShoppingCartProvider>
	);
};

export default App;
