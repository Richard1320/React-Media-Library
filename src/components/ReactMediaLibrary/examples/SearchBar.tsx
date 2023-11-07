import {FileLibraryListItem, ReactMediaLibraryProps} from "../../../../types";
import ReactMediaLibrary from "../ReactMediaLibrary";
import React, {ChangeEvent, Dispatch, ReactElement, SetStateAction, useState} from "react";
import {ReactMediaLibraryStory, storiesDefaultPrimaryArgs} from "./_defaults";
import {storiesDefaultFileLibraryList} from "./_storiesDefaultFileLibraryList";

interface FileLibraryTopBarProps {
	searchValue: string;
	setSearchValue: Dispatch<SetStateAction<string>>;
}
const FileLibraryTopBar: React.FC<FileLibraryTopBarProps> = (props: FileLibraryTopBarProps): ReactElement => {
	function onSearchChange(e: ChangeEvent<HTMLInputElement>): void {
		props.setSearchValue(e.target.value);
	}
	return (
		<div
			style={{
				padding: "0 1rem 1rem",
			}}
		>
			<input
				type="search"
				value={props.searchValue}
				onChange={onSearchChange}
				placeholder="Search files"
				style={{
					width: "100%",
					padding: "0.5rem 1rem",
					borderRadius: "0.5rem",
					border: "1px solid #ccc",
				}}
			/>
		</div>
	);
}
export const SearchBar: ReactMediaLibraryStory = (args: ReactMediaLibraryProps) => {
	const [searchValue, setSearchValue] = useState<string>("");

	const topBarComponent = () => (
		<FileLibraryTopBar
			searchValue={searchValue}
			setSearchValue={setSearchValue}
		/>
	);

	function filterItem(item: FileLibraryListItem): boolean {
		return item.title?.includes(searchValue) || item.fileName?.includes(searchValue) || false;
	}

	return (
		<ReactMediaLibrary
			{...args}
			topBarComponent={topBarComponent}
			fileLibraryList={storiesDefaultFileLibraryList.filter(filterItem)}
		/>
	);
}
SearchBar.args = {
	...storiesDefaultPrimaryArgs,
};

