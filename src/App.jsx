import { Link, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import CartProvider from './lib/context/CartContext'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ProductListPage from './pages/ProductListPage'

function App () {
  const productDetailsLoader = async ({ params }) => {
    return fetch(`${import.meta.env.VITE_BASEURL}/product/${params.id}`).then((res) => res.json())
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      handle: {
        crumb: () => <Link to='/'>Products</Link>
      },
      children: [
        {
          index: true,
          element: <ProductListPage />
        },
        {
          path: 'product/:id',
          element: <ProductDetailsPage />,
          loader: productDetailsLoader,
          handle: {
            crumb: (data) => (
              <span>
                {data.brand} {data.model}
              </span>
            )
          }
        },
        {
          path: '*',
          element: <div>Not Found</div>
        }
      ]
    }
  ])

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App
