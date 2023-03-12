import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";

function App() {
	const productDetailsLoader = async ({ params }) => {
		return fetch(`${import.meta.env.VITE_BASEURL}/product/${params.id}`).then((res) => res.json());
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <ProductListPage />,
				},
				{
					path: "product/:id",
					element: <ProductDetailsPage />,
					loader: productDetailsLoader,
				},
				{
					path: "*",
					element: <div>Not Found</div>,
				},
			],
		},
	]);

	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
