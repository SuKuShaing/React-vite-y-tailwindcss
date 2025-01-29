const Card = (data) => {
	return (
		<div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
			<figure className="relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3  py-2">
					{data.data.category.name}
				</span>
				<img
					src={data.data.images[0]}
					alt={data.data.title}
                    className="size-full object-cover rounded-lg"
				/>
				<div className="absolute top-0 right-0 flex justify-center items-center bg-white size-6 rounded-full m-2 px-2 py-1">
					+
				</div>
			</figure>
			<p className="flex justify-between">
				<span className="text-sm font-light">{data.data.title}</span>
				<span className="text-sm font-medium">${data.data.price}</span>
			</p>
		</div>
	);
};

export default Card;
