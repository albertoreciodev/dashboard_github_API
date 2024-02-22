import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DashboardFactory } from "./sections/dashboard/DashboardFactory";
import { Layout } from "./sections/layout/Layout";
import { GitHubRepositoryDetailFactory } from "./sections/detail/GitHubRepositoryDetailFactory";
// Nos hemos quitado esta dependencia de inicializar el repository aqui y a larga es peor
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: DashboardFactory.create(),
			},
			{
				path: "/repository/:organization/:name",
				element: GitHubRepositoryDetailFactory.create(),
			},
		],
	},
]);

export function Router() {
	return <RouterProvider router={router} />;
}
