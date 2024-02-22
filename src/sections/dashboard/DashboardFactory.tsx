import { config } from "../../devdash_config";
import { GitHubApi_GitHubRepository_Repository } from "../../infrastructure/GitHubApi_GitHubRepository_Repository";
import { Dashboard } from "./Dashboard";

const repository = new GitHubApi_GitHubRepository_Repository(config.github_access_token);

export class DashboardFactory {
	static create(): React.ReactElement {
		return <Dashboard repository={repository} />;
	}
}
