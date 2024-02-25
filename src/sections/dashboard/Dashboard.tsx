import { config } from "../../devdash_config";
import styles from "./Dashboard.module.scss";

import { GitHubRepositoryRepository } from "../../domain/GitHubRepository_Repository";
import { GitHubRepositoryWidget } from "./repositoryWidget/RepositoryWidget";
import { useGitHubRepositories } from "./gitHubRepositoryWidget/useGitHubRepositories";
import { RepositoryWidgetsSkeleton } from "./repositoryWidget/RepositoryWidgetsSkeleton";
import { RepositoryWidget } from "../../domain/RepositoryWidget";
import { RepositoryWidgetRepository } from "../../domain/RepositoryWidgetRepository";
import { useMemo } from "react";

const gitHubRepositoryUrls = config.widgets.map((widget) => widget.repository_url);

export function Dashboard({
	gitHubRepositoryRepository,
	repositoryWidgetRepository,
	repositoryWidgets,
}: {
	gitHubRepositoryRepository: GitHubRepositoryRepository;
	repositoryWidgetRepository: RepositoryWidgetRepository;
	repositoryWidgets: RepositoryWidget[];
}) {
	//const { repositoryData, isLoading } = useGitHubRepositories(repository, gitHubRepositoryUrls);

	const gitHubRepositoryUrls = useMemo(() => {
		return repositoryWidgets.map((widget) => widget.repositoryUrl);
	}, [repositoryWidgets]);

	const { repositoryData, isLoading } = useGitHubRepositories(
		gitHubRepositoryRepository,
		gitHubRepositoryUrls
	);

	return (
		<>
			{/* <DashboardHeader /> */}
			{isLoading && (
				<section className={styles.container}>
					<RepositoryWidgetsSkeleton numberOfWidgets={gitHubRepositoryUrls.length} />
				</section>
			)}
			{!isLoading && repositoryData.length === 0 ? (
				<div className={styles.empty}>
					<span>No hay widgets configurados.</span>
				</div>
			) : (
				<section className={styles.container}>
					{repositoryData.map((repository) => (
						<GitHubRepositoryWidget
							key={`${repository.id.organization}/${repository.id.name}`}
							repository={repository}
						/>
					))}
				</section>
			)}
		</>
	);
}
