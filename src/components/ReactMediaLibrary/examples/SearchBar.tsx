import {FileLibraryListItem, ReactMediaLibraryProps} from "../../../../types";
import ReactMediaLibrary from "../ReactMediaLibrary";
import React, {ChangeEvent, Dispatch, ReactElement, SetStateAction, useState} from "react";
import {ReactMediaLibraryStory, storiesDefaultPrimaryArgs} from "./_defaults";
import {storiesDefaultFileLibraryList} from "./_storiesDefaultFileLibraryList";
import {useArgs} from "@storybook/preview-api";

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
				placeholder="Search file titles or filenames"
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
	const [{}, updateArgs] = useArgs<ReactMediaLibraryProps>();

	function topBarComponent(): ReactElement {
		return (
			<FileLibraryTopBar
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
		);
	}

	function filterItem(item: FileLibraryListItem): boolean {
		return item.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
			item.fileName?.toLowerCase().includes(searchValue.toLowerCase()) ||
			false;
	}

	return (
		<React.Fragment>
			<button
				onClick={() => updateArgs({isOpen: true})}
			>
				Open Media Library
			</button>
			<ReactMediaLibrary
				{...args}
				onClose={() => updateArgs({isOpen: false})}
				topBarComponent={topBarComponent}
				fileLibraryList={storiesDefaultFileLibraryList.filter(filterItem)}
			/>
		</React.Fragment>
	);
}
SearchBar.args = {
	...storiesDefaultPrimaryArgs,
};

