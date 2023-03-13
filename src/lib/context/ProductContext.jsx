import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
	const [products, setProducts] = useState();
	const [initialProducts, setInitialProducts] = useState();

	useEffect(() => {
		const getProducts = async () => {
			if (!localStorage.getItem("products")) {
				const request = await fetch(`${import.meta.env.VITE_BASEURL}/product`);
				const data = await request.json();

				localStorage.setItem("products", JSON.stringify(data));
			}

			const products = JSON.parse(localStorage.getItem("products"));
			setInitialProducts(products);
			setProducts(products);
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
