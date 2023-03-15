import React, { createContext, useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

const CartContext = createContext()

function CartProvider ({ children }) {
  const [cookies, setCookie] = useCookies(['cartCount'])

  const [cartCount, setCartCount] = useState(cookies?.cartCount || 0)

  useEffect(() => {
    setCookie('cartCount', cartCount, { path: '/', maxAge: 3600 })
  }, [cartCount])

  return <CartContext.Provider value={{ cartCount, setCartCount }}>{children}</CartContext.Provider>
}

export const useCartContext = () => {
  const context = useContext(CartContext)

  return context
}

export default CartProvider
