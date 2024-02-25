import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DashboardFactory } from "./sections/dashboard/DashboardFactory";
import { GitHubRepositoryDetailFactory } from "./sections/detail/GitHubRepositoryDetailFactory";
import { Layout } from "./sections/layout/Layout";
import { RouterMiddleware } from "./sections/router/RouterMiddleware";
// Nos hemos quitado esta dependencia de inicializar el repository aqui y a larga es peor
const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<RouterMiddleware>
				<Layout />
			</RouterMiddleware>
		),
		children: [
			{
				path: "/",
				element: <DashboardFactory />,
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
