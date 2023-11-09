import {FileLibraryListItem, ReactMediaLibraryProps} from "../../../../types";
import ReactMediaLibrary from "../ReactMediaLibrary";
import React, {ChangeEvent, CSSProperties, FormEvent, ReactElement, useState} from "react";
import {ReactMediaLibraryStory, storiesDefaultPrimaryArgs} from "./_defaults";
import {FileLibrarySelectedItems} from "../../FileLibrarySelectedItems";

interface FormValues {
	title: string;
	description: string;
}

const inputStyle: CSSProperties = {
	width: "100%",
	padding: "0.5rem 1rem",
	borderRadius: "0.5rem",
	border: "1px solid #ccc",
	marginBottom: "1rem",
	boxSizing: "border-box",
};

const CustomSelectedFormComponent: React.FC<FileLibraryListItem> = (props: FileLibraryListItem): ReactElement => {
	const [formValues, setFormValues] = useState<FormValues>({
		title: props.title || "",
		description: props.description || "",
	})

	async function onFormSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault();
		alert(JSON.stringify(formValues));
	}

	function onTitleChange(e: ChangeEvent<HTMLInputElement>): void {
		setFormValues({
			...formValues,
			title: e.target.value,
		});
	}

	function onDescriptionChange(e: ChangeEvent<HTMLInputElement>): void {
		setFormValues({
			...formValues,
			description: e.target.value,
		});
	}

	return (
		<form onSubmit={onFormSubmit}>
			<img
				src={props.thumbnailUrl}
				alt={props.title}
				style={{
					width: "100%",
					aspectRatio: "16 / 9",
					objectFit: "cover",
					objectPosition: "50% 50%",
					marginBottom: "1rem",
				}}
			/>
			<label>
				<span>Title</span>
				<input
					type="text"
					value={formValues.title}
					onChange={onTitleChange}
					style={inputStyle}
				/>
			</label>
			<label>
				<span>Description</span>
				<input
					type="text"
					value={formValues.description}
					onChange={onDescriptionChange}
					style={inputStyle}
				/>
			</label>
			<button type="submit">
				Save
			</button>
		</form>
	);
}
export const CustomSelectedForm: ReactMediaLibraryStory = (args: ReactMediaLibraryProps) => (
	<ReactMediaLibrary
		{...args}
	/>
);
CustomSelectedForm.args = {
	...storiesDefaultPrimaryArgs,
	selectedItemsComponent: () => (
		<FileLibrarySelectedItems
			itemComponent={(item) => (<CustomSelectedFormComponent {...item} />)}
		/>
	),
};
