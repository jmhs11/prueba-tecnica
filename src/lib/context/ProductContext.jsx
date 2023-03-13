import React, { useState, useEffect, useContext, createContext } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
	const [products, setProducts] = useState();

	let initialProducts = [];

	useEffect(() => {
		const getProducts = async () => {
			const data = await fetch(`${import.meta.env.VITE_BASEURL}/product`);
			const dataJSON = await data.json();

			initialProducts = dataJSON;
			setProducts(dataJSON);
		};

		getProducts();
	}, []);

	return (
		<ProductContext.Provider value={{ initialProducts, products, setProducts }}>{children}</ProductContext.Provider>
	);
}

export const useProductContext = () => {
	const context = useContext(ProductContext);

	return context;
};

export default ProductProvider;
