import {ReactMediaLibraryProps} from "../../../../types";
import ReactMediaLibrary from "../ReactMediaLibrary";
import React from "react";
import {ReactMediaLibraryStory, storiesDefaultPrimaryArgs} from "./_defaults";

export const MultiSelect: ReactMediaLibraryStory = (args: ReactMediaLibraryProps) => (
	<ReactMediaLibrary
		{...args}
	/>
);
MultiSelect.args = {
	...storiesDefaultPrimaryArgs,
	multiSelect: true,
};
