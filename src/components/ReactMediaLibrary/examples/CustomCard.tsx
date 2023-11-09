import {FileLibraryListItem, ReactMediaLibraryProps} from "../../../../types";
import ReactMediaLibrary from "../ReactMediaLibrary";
import React, {ReactElement, useContext} from "react";
import {ReactMediaLibraryStory, storiesDefaultPrimaryArgs} from "./_defaults";
import {ReactMediaLibraryContext} from "../../../context/ReactMediaLibraryContext";

const CustomLibraryCard: React.FC<FileLibraryListItem> = (props: FileLibraryListItem): ReactElement => {
	const {selectedItems} = useContext(ReactMediaLibraryContext);
	const isSelected: boolean = !!selectedItems.find((element) => element._id === props._id);

	return (
		<div
			style={{
				backgroundColor: (isSelected) ? "skyblue" : "white",
			}}
		>
			<h5>
				{props.title}
			</h5>
			<p>
				This is custom content for {props.fileName} that I wish to display.
			</p>
		</div>
	);
}
export const CustomCard: ReactMediaLibraryStory = (args: ReactMediaLibraryProps) => (
	<ReactMediaLibrary
		{...args}
	/>
);
CustomCard.args = {
	...storiesDefaultPrimaryArgs,
	libraryCardComponent: (item) => (<CustomLibraryCard {...item} />),
};
