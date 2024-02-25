import { RepositoryWidget } from "./RepositoryWidget";
import { RepositoryAlreadyExistsError } from "./RepositoryAlreadyExistsError"

export interface RepositoryWidgetRepository {
	search(): Promise<RepositoryWidget[]>;
	save(widget: RepositoryWidget): Promise<RepositoryAlreadyExistsError | void>;

} 