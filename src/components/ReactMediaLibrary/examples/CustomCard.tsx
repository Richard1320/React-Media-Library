import {FileLibraryListItem, ReactMediaLibraryProps} from "../../../../types";
import ReactMediaLibrary from "../ReactMediaLibrary";
import React, {ReactElement} from "react";
import {ReactMediaLibraryStory, storiesDefaultPrimaryArgs} from "./_defaults";

interface CustomLibraryCardProps extends FileLibraryListItem  {isSelected?: boolean}
const CustomLibraryCard: React.FC<CustomLibraryCardProps> = (props: CustomLibraryCardProps): ReactElement => (
	<div
		style={{
			backgroundColor: (props.isSelected) ? "skyblue" : "white",
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
export const CustomCard: ReactMediaLibraryStory = (args: ReactMediaLibraryProps) => (
	<ReactMediaLibrary
		{...args}
	/>
);
CustomCard.args = {
	...storiesDefaultPrimaryArgs,
	libraryCardComponent: (item, isSelected) => (<CustomLibraryCard isSelected={isSelected} {...item} />),
};
