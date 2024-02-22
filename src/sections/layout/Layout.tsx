import { Outlet } from "react-router-dom";

import Brand from "../../assets/svg/brand.svg?react";
import styles from "./Layout.module.scss";
import { ErrorBoundary } from "./ErrorBoundary";

export const Layout = () => {
	const title = "DevDash_";

	return (
		<>
			<header className={styles.header}>
				<section className={styles.header__container}>
					<Brand />
					<h1 className={styles.app__brand}>{title}</h1>
				</section>
			</header>
			<ErrorBoundary>
				<Outlet />
			</ErrorBoundary>
		</>
	);
};
