import {ReactMediaLibraryProps} from "../../../../types";
import ReactMediaLibrary from "../ReactMediaLibrary";
import React from "react";
import {ReactMediaLibraryStory, storiesDefaultPrimaryArgs} from "./_defaults";

export const Standard: ReactMediaLibraryStory = (args: ReactMediaLibraryProps) => (
	<ReactMediaLibrary
		{...args}
	/>
);
Standard.args = {
	...storiesDefaultPrimaryArgs,
};
