import {ReactMediaLibraryProps} from "../../../../types";
import ReactMediaLibrary from "../ReactMediaLibrary";
import React from "react";
import {ReactMediaLibraryStory, storiesDefaultPrimaryArgs} from "./_defaults";

export const Empty: ReactMediaLibraryStory = (args: ReactMediaLibraryProps) => (
	<ReactMediaLibrary
		{...args}
	/>
);
Empty.args = {
	...storiesDefaultPrimaryArgs,
	fileLibraryList: [],
};
