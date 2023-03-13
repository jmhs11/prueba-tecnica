import { useMatches } from "react-router-dom";

function Breadcrumbs() {
	let matches = useMatches();
	let crumbs = matches
		// first get rid of any matches that don't have handle and crumb
		.filter((match) => Boolean(match.handle?.crumb))
		// now map them into an array of elements, passing the loader
		// data to each one
		.map((match) => match.handle.crumb(match.data));

	return (
		<ul className="flex text-lg text-white">
			{crumbs.map((crumb, index) => (
				<li className="after:content-['_>_'] after:last-of-type:content-['']" key={index}>
					{crumb}
				</li>
			))}
		</ul>
	);
}

export default Breadcrumbs;
