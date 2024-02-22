import { GitHubRepository } from "../../domain/GitHubRepository";

import styles from "./GitHubRepositoryWidget.module.scss";
import Lock from "../../assets/svg/lock.svg?react";
import Unlock from "../../assets/svg/unlock.svg?react";
import Check from "../../assets/svg/check.svg?react";
import Error from "../../assets/svg/error.svg?react";
import PullRequests from "../../assets/svg/git-pull-request.svg?react";
import IssueOpened from "../../assets/svg/issue-opened.svg?react";
import Forks from "../../assets/svg/repo-forked.svg?react";
import Start from "../../assets/svg/star.svg?react";
import Watchers from "../../assets/svg/watchers.svg?react";
import { Link } from "react-router-dom";

const isoToReadableDate = (lastUpdate: Date | string): string => {
	//const lastUpdateDate = new Date(lastUpdate);
	const lastUpdateDate = typeof lastUpdate === "string" ? new Date(lastUpdate) : lastUpdate;
	const currentDate = new Date();
	//console.log("lastUpdateDate==", lastUpdateDate);
	//console.log("currentDate==", currentDate);
	const diffTime = currentDate.getTime() - lastUpdateDate.getTime();
	const diffDays = Math.round(diffTime / (1000 * 3600 * 24));

	if (diffDays === 0) {
		return "today";
	}

	if (diffDays > 30) {
		return "more than a month ago";
	}

	return `${diffDays} days ago`;
};

// export const GitHubRepositoryWidget = (props: {widget: GitHubRepository}) => {
// props seria el objeto que lo engloba todo pero siempre se hace el destructuring
export const GitHubRepositoryWidget = ({ repository }: { repository: GitHubRepository }) => {
	return (
		<article className={styles.widget} key={`${repository.id.organization}/${repository.id.name}`}>
			<header className={styles.widget__header}>
				{/* <a
					href={`/repository/${repository.id.organization}/${repository.id.name}`}
					target="_blank"
					title={`${repository.id.organization}/${repository.id.name}`}
					rel="noreferrer"
					className={styles.widget__title}
				>
					{repository.id.organization}/{repository.id.name}
				</a> */}

				<h2 className={styles.widget__title}>
					<Link to={`/repository/${repository.id.organization}/${repository.id.name}`}>
						{repository.id.organization}/{repository.id.name}
					</Link>
				</h2>

				{repository.private ? <Lock /> : <Unlock />}
			</header>
			<div className={styles.widget__body}>
				<div className={styles.widget__status}>
					<p>Last update {isoToReadableDate(repository.updatedAt)}</p>
					{repository.hasWorkflows && (
						<div>{repository.isLastWorkflowSuccess ? <Check /> : <Error />}</div>
					)}
				</div>
				<p className={styles.widget__description}>{repository.description}</p>
			</div>
			<footer className={styles.widget__footer}>
				<div className={styles.widget__stat}>
					<Start />
					<span>{repository.stars}</span>
				</div>
				<div className={styles.widget__stat}>
					<Watchers />
					<span>{repository.watchers}</span>
				</div>
				<div className={styles.widget__stat}>
					<Forks />
					<span>{repository.forks}</span>
				</div>
				<div className={styles.widget__stat}>
					<IssueOpened />
					<span>{repository.issues}</span>
				</div>
				<div className={styles.widget__stat}>
					<PullRequests />
					<span>{repository.pullRequests}</span>
				</div>
			</footer>
		</article>
	);
};
