import React from "react";

import { config } from "../../devdash_config";
import { GitHubApi_GitHubRepository_Repository } from "../../infrastructure/GitHubApi_GitHubRepository_Repository";
import { GitHubRepositoryDetail } from "./GitHubRepositoryDetail";
import { GitHubApiGitHubRepositoryPullRequestRepository } from "../../infrastructure/GitHubApiGitHubRepositoryPullRequestRepository";

const repository = new GitHubApi_GitHubRepository_Repository(config.github_access_token);

const gitHubRepositoryRepository = new GitHubApi_GitHubRepository_Repository(
	config.github_access_token
);
const gitHubRepositoryPullRequestRepository = new GitHubApiGitHubRepositoryPullRequestRepository(
	config.github_access_token
);

export class GitHubRepositoryDetailFactory {
	static create(): React.ReactElement {
		return (
			<GitHubRepositoryDetail
				gitHubRepositoryRepository={repository}
				gitHubRepositoryPullRequestRepository={gitHubRepositoryPullRequestRepository}
			/>
		);
	}
}
