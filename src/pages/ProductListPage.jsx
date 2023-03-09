import { useLoaderData } from "react-router-dom";
import Item from "../components/Item";
import Search from "../components/Search";

function ProductListPage() {
	const products = useLoaderData();
	console.log(products);

	return (
		<div>
			<Search />
			<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{products?.map((product) => (
					<Item key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}
export default ProductListPage;
