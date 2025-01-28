const Card = () => {
	return (
		<div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
			<figure className="relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3  py-2">
					Electronics
				</span>
				<img
					src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="headphones"
                    className="size-full object-cover rounded-lg"
				/>
				<div className="absolute top-0 right-0 flex justify-center items-center bg-white size-6 rounded-full m-2 px-2 py-1">
					+
				</div>
			</figure>
			<p className="flex justify-between">
				<span className="text-sm font-light">Headphones</span>
				<span className="text-sm font-medium">$300</span>
			</p>
		</div>
	);
};

export default Card;
