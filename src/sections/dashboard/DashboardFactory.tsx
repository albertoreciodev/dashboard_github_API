import { config } from "../../devdash_config";
import { GitHubApi_GitHubRepository_Repository } from "../../infrastructure/GitHubApi_GitHubRepository_Repository";
import { LocalStorageGitHubAccessTokenRepository } from "../../infrastructure/LocalStorageGithubAccessTokenRepository";
import { LocalStorageRepositoryWidgetRepository } from "../../infrastructure/LocalStorageRepositoryWidget_Repository";
import { GitHubAccessTokenSearcher } from "../config/GithubAccessTokenSearcher";
import { Dashboard } from "./Dashboard";
import { useRepositoryWidgetContext } from "./repositoryWidget/RepositoryWidgetContextProvider";

const gitHubRepositoryRepository = new GitHubApi_GitHubRepository_Repository(
	config.github_access_token
);
const repositoryWidgetRepository = new LocalStorageRepositoryWidgetRepository();

const ghAccessTokenRepository = new LocalStorageGitHubAccessTokenRepository();
const ghAccessTokenSearcher = new GitHubAccessTokenSearcher(ghAccessTokenRepository);

export function DashboardFactory() {
	const { repositoryWidgets } = useRepositoryWidgetContext();

	return (
		<Dashboard
			gitHubRepositoryRepository={gitHubRepositoryRepository}
			repositoryWidgetRepository={repositoryWidgetRepository}
			repositoryWidgets={repositoryWidgets}
		/>
	);
}
