import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
	return (
		<>
			<Header />
			<main className="px-2 py-4 md:p-4 container mx-auto lg:h-[calc(100dvh-80px)]">
				<Outlet />
			</main>
		</>
	);
}
export default Layout;
