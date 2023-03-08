import { useParams } from "react-router-dom";

function ProductDetailsPage() {
	const params = useParams();

	return <div>{JSON.stringify(params, null, 2)}</div>;
}
export default ProductDetailsPage;
