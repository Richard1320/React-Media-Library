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
	multiSelectCallback: (items) => alert(`Select items ${items.map(i => i._id).join(", ")}`),
	multiDeleteCallback: (items) => alert(`Delete items ${items.map(i => i._id).join(", ")}`),
};
