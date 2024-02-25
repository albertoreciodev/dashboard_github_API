import { Router } from "./Router";
import { LocalStorageRepositoryWidgetRepository } from "./infrastructure/LocalStorageRepositoryWidget_Repository";
import { RepositoryWidgetContextProvider } from "./sections/dashboard/repositoryWidget/RepositoryWidgetContextProvider";

const repository = new LocalStorageRepositoryWidgetRepository();

export function App() {
	return (
		<RepositoryWidgetContextProvider repository={repository}>
			<Router />
		</RepositoryWidgetContextProvider>
	);
}
