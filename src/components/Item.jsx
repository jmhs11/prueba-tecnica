import { Link } from 'react-router-dom'

function Item ({ product }) {
  return (
    <Link to={`/product/${product.id}`} className='flex'>
      <div className='bg-white rounded-lg shadow-lg overflow-hidden p-4 grow'>
        <img
          className='h-48 w-full object-contain aspect-square'
          src={product.imgUrl}
          alt={`${product.brand} ${product.model}`}
        />
        <div className='pt-4'>
          <h3 className='font-semibold text-lg'>
            {product.brand} {product.model}
          </h3>
          <h4 className='font-semibold text-gray-700'>{product.price ? `${product.price}€` : 'Sin Precio'}</h4>
        </div>
      </div>
    </Link>
  )
}
export default Item
