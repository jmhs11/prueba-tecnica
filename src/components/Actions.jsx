import { useCartContext } from '../lib/context/CartContext'

function Actions ({ product }) {
  const { setCartCount } = useCartContext()

  const addToCart = async () => {
    const productToCart = {
      id: product.id,
      colorCode: document.getElementById('colors').value,
      storageCode: document.getElementById('storage').value
    }

    const request = await fetch(`${import.meta.env.VITE_BASEURL}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productToCart)
    })

    const cart = await request.json()

    setCartCount(cart.count)
  }

  return (
    <div className='flex flex-col'>
      {product.internalMemory.length && (
        <>
          <label htmlFor='storage' className='font-bold'>
            Almacenamiento
          </label>
          <select id='storage'>
            {product.internalMemory.map((storage) => (
              <option key={storage} value={storage}>
                {storage}
              </option>
            ))}
          </select>
        </>
      )}
      {product.colors.length && (
        <>
          <label htmlFor='colors' className='font-bold'>
            Colores
          </label>
          <select id='colors'>
            {product.colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </>
      )}
      <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4' onClick={addToCart}>
        Añadir al carrito
      </button>
    </div>
  )
}
export default Actions
