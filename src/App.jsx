import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";

function App() {
	const productListLoader = async () => {
		return fetch("/fake/api/products.json");
	};

	const productDetailsLoader = async ({ params }) => {
		return fetch("/fake/api/products.json");
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: <ProductListPage />,
			loader: productListLoader,
		},
		{
			path: "product/:id",
			element: <ProductDetailsPage />,
			loader: productDetailsLoader,
		},
	]);

	return (
		<>
			<Header />
			<main className="px-2 py-4 md:p-4">
				<RouterProvider router={router} />
			</main>
		</>
	);
}

export default App;
