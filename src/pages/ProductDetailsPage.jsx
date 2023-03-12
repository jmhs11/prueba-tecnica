import { useLoaderData } from "react-router-dom";
import Actions from "../components/Actions";
import Description from "../components/Description";
import Image from "../components/Image";

function ProductDetailsPage() {
	const product = useLoaderData();

	console.log(product);

	return (
		<div className="grid md:grid-cols-2 mt-20 gap-8">
			<Image
				className="w-full lg:w-2/3 lg:place-self-center object-contain"
				src={product.imgUrl}
				alt={`${product.brand} ${product.model}`}
			/>
			<div>
				<Description product={product} />
				<Actions product={product} />
			</div>
		</div>
	);
}
export default ProductDetailsPage;
