import { config } from "../../devdash_config";
import styles from "./Dashboard.module.scss";

import { GitHubRepositoryRepository } from "../../domain/GitHubRepository_Repository";
import { GitHubRepositoryWidget } from "./GitHubRepositoryWidget";
import { useGitHubRepositories } from "./useGitHubRepositories";
import { WidgetsSkeleton } from "./WidgetsSkeleton";

const gitHubRepositoryUrls = config.widgets.map((widget) => widget.repository_url);

export const Dashboard = ({ repository }: { repository: GitHubRepositoryRepository }) => {
	const { repositoryData, isLoading } = useGitHubRepositories(repository, gitHubRepositoryUrls);

	return (
		<>
			{/* <DashboardHeader /> */}
			{isLoading && (
				<section className={styles.container}>
					<WidgetsSkeleton numberOfWidgets={gitHubRepositoryUrls.length} />
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
};
