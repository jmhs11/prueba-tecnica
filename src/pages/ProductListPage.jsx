import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Item from "../components/Item";
import Search from "../components/Search";
import { useProductContext } from "../lib/context/ProductContext";

function ProductListPage() {
	const { initialProducts, products: searchResults, setProducts: setSearchResults } = useProductContext();

	let searchTimeout;

	const searchProducts = (ev) => {
		clearTimeout(searchTimeout);
		if (!ev.target.value) setSearchResults(initialProducts);

		searchTimeout = setTimeout(() => {
			const results = initialProducts.filter(
				(p) => p.brand.toLowerCase().includes(ev.target.value) || p.model.toLowerCase().includes(ev.target.value)
			);
			setSearchResults(results);
		}, 500);
	};

	return (
		<div>
			<div className="flex justify-end">
				<Search onChange={searchProducts} />
			</div>
			<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
				{searchResults?.map((product) => (
					<Item key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}

export default ProductListPage;
