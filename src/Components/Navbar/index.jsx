import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { ShopppingCartContext } from "../../Context";

const Navbar = () => {
	const context = useContext(ShopppingCartContext);

	const activeStyle = "underline underline-offset-4";

	return (
		<nav className="flex justify-between items-center z-10 w-full py-5 px-8 text-sm font-light">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink
						to="/"
					>
						Shopi
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
						to="/"
					>
						All
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
						to="/clothes"
					>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
						to="/electronics"
					>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
						to="/furniture"
					>
						Furniture
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
						to="/toys"
					>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
						to="/others"
					>
						Others
					</NavLink>
				</li>
			</ul>
			<ul className="flex items-center gap-3">
				<li className="text-black/60">seba@platzi.com</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
						to="/my-orders"
					>
						My Orders
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
						to="/my-account"
					>
						My Account
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
						to="/sign-in"
					>
						Sign In
					</NavLink>
				</li>
				<li className="flex gap-1 items-center"><ShoppingBagIcon className="size-5" /> {context.count}</li>
			</ul>
		</nav>
	);
};

export default Navbar;
