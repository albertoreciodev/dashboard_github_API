import React, { useState } from "react";

import Add from "../../assets/svg/add.svg?react";
import styles from "./AddWidgetForm.module.scss";

import { RepositoryWidgetRepository } from "../../../domain/RepositoryWidgetRepository";
import { useAddRepositoryWidget } from "./useAddRepositoryWidget";

type FormEvent<T> = React.FormEvent<HTMLFormElement> & {
	target: { elements: { [key in keyof T]: { value: T[key] } } };
};

type FormFields = { id: string; repositoryUrl: string };

export function AddRepositoryWidgetForm({
	repository,
}: {
	repository: RepositoryWidgetRepository;
}) {
	const [isFormActive, setIsFormActive] = useState(false);
	const [hasAlreadyExistsError, setHasAlreadyExistsError] = useState(false);
	const { save } = useAddRepositoryWidget(repository);

	const submitForm = async (ev: FormEvent<FormFields>) => {
		ev.preventDefault();
		const { id, repositoryUrl } = ev.target.elements;
		// const error = await save({ id: id.value, repositoryUrl: repositoryUrl.value });
		// setHasAlreadyExistsError(!!error);
		// setIsFormActive(false);
		try {
			await save({ id: id.value, repositoryUrl: repositoryUrl.value });
			setHasAlreadyExistsError(false);
			setIsFormActive(false);
		} catch (error) {
			console.error("Error saving:", error);
			setHasAlreadyExistsError(true);
			setIsFormActive(false);
		}
	};

	return (
		<article className={styles.add_widget}>
			<div className={styles.container}>
				{!isFormActive && !hasAlreadyExistsError ? (
					<button onClick={() => setIsFormActive(true)} className={styles.add_button}>
						<Add />
						<p>Añadir repositorio</p>
					</button>
				) : (
					<form className={styles.form} onSubmit={submitForm}>
						<div>
							<label htmlFor="id">Id</label>
							<input type="text" name="id" id="id" />
						</div>
						<div>
							<label htmlFor="repositoryUrl">Url del repositorio</label>
							<input type="text" name="repositoryUrl" id="repositoryUrl" />
						</div>

						{hasAlreadyExistsError && (
							<p role="alert" aria-describedby="duplicated-error">
								<span id="duplicated-error">Repositorio duplicado</span>
							</p>
						)}

						<div>
							<input type="submit" value="Añadir" />
						</div>
					</form>
				)}
			</div>
		</article>
	);
}
