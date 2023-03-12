import React, { useState, useEffect, useContext, createContext } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
	const [cartCount, setCartCount] = useState(localStorage.getItem("cart") || 0);

	useEffect(() => {
		localStorage.setItem("cart", cartCount);
	}, [cartCount]);

	return <CartContext.Provider value={{ cartCount, setCartCount }}>{children}</CartContext.Provider>;
}

export const useCartContext = () => {
	const context = useContext(CartContext);

	return context;
};

export default CartProvider;
