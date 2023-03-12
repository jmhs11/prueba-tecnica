function Description({ product }) {
	return (
		<div>
			<h1 className="text-2xl font-bold">
				{product.brand} {product.model}
			</h1>
			<p className="text-3xl font-thin">{product.price}€</p>
			<div className="mt-6">
				<p>
					<span className="font-bold">CPU: </span>
					{product.cpu}
				</p>
				<p>
					<span className="font-bold">RAM: </span>
					{product.ram}
				</p>
				<p>
					<span className="font-bold">Operative System: </span>
					{product.os}
				</p>
				<p>
					<span className="font-bold">Display: </span>
					<span className="block">{product.displayResolution}</span>
					<span className="block">{product.displayType}</span>
					<span className="block">{product.displaySize}</span>
				</p>
				<p>
					<span className="font-bold">Battery: </span>
					{product.battery}
				</p>
				{!!product.primaryCamera || !!product.secondaryCmera ? (
					<p>
						<span className="font-bold">Cameras: </span>
						{product.primaryCamera ? (
							<span className="block">
								Primary:{" "}
								{Array.isArray(product.primaryCamera) ? product.primaryCamera.join(" ") : product.primaryCamera}
							</span>
						) : null}
						{product.secondaryCmera ? (
							<span className="block">
								Secondary:{" "}
								{Array.isArray(product.secondaryCmera) ? product.secondaryCmera.join(" ") : product.secondaryCmera}
							</span>
						) : null}
					</p>
				) : null}
				<p>
					<span className="font-bold">Dimentions: </span>
					{product.dimentions}
				</p>
				<p>
					<span className="font-bold">Weight: </span>
					{product.weight}g
				</p>
			</div>
		</div>
	);
}
export default Description;
