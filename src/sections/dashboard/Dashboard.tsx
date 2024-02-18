//import { config } from "../../devdash_config";
import { githubApiResponses } from "../../github_api_responses";
import styles from "./Dashboard.module.scss";
import Lock from "../../assets/svg/lock.svg?react";
import Unlock from "../../assets/svg/unlock.svg?react";
import Check from "../../assets/svg/check.svg?react";
import Error from "../../assets/svg/error.svg?react";
import Brand from "../../assets/svg/brand.svg?react";
import PullRequests from "../../assets/svg/git-pull-request.svg?react";
import IssueOpened from "../../assets/svg/issue-opened.svg?react";
import Forks from "../../assets/svg/repo-forked.svg?react";
import Start from "../../assets/svg/star.svg?react";
import Watchers from "../../assets/svg/watchers.svg?react";

const isoToReadableDate = (lastUpdate: string): string => {
	const lastUpdateDate = new Date(lastUpdate);
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

export const Dashboard = () => {
	const title = "DevDash_";

	return (
		<>
			<header className={styles.header}>
				<section className={styles.header__container}>
					<Brand />
					<h1 className={styles.app__brand}>{title}</h1>
				</section>
			</header>

			<section className={styles.container}>
				{githubApiResponses.map((widget) => (
					<article className={styles.widget} key={widget.repositoryData.id}>
						<header className={styles.widget__header}>
							<a
								className={styles.widget__title}
								href={widget.repositoryData.html_url}
								target="_blank"
								title={`${widget.repositoryData.organization.login}/${widget.repositoryData.name}`}
								rel="noreferrer"
							>
								{widget.repositoryData.organization.login}/{widget.repositoryData.name}
							</a>
							{widget.repositoryData.private ? <Lock /> : <Unlock />}
						</header>

						<div className={styles.widget__body}>
							<div className={styles.widget__status}>
								<p>Last update {isoToReadableDate(widget.repositoryData.updated_at)}</p>
								{widget.CiStatus.workflow_runs.length > 0 && (
									<div>
										{widget.CiStatus.workflow_runs[0].status === "completed" ? (
											<Check />
										) : (
											<Error />
										)}
									</div>
								)}
							</div>
							<p className={styles.widget__description}>{widget.repositoryData.description}</p>
						</div>

						<footer className={styles.widget__footer}>
							<div className={styles.widget__stat}>
								<Start />
								<span>{widget.repositoryData.stargazers_count}</span>
							</div>

							<div className={styles.widget__stat}>
								<Watchers />
								<span>{widget.repositoryData.watchers_count}</span>
							</div>

							<div className={styles.widget__stat}>
								<Forks />
								<span>{widget.repositoryData.forks_count}</span>
							</div>

							<div className={styles.widget__stat}>
								<IssueOpened />
								<span>{widget.repositoryData.open_issues_count}</span>
							</div>

							<div className={styles.widget__stat}>
								<PullRequests />
								<span>{widget.pullRequest.length}</span>
							</div>
						</footer>
					</article>
				))}
			</section>
		</>
	);
};
