import {ReactMediaLibraryProps} from "../../../../types";
import ReactMediaLibrary from "../ReactMediaLibrary";
import React from "react";
import {ReactMediaLibraryStory, storiesDefaultPrimaryArgs} from "./_defaults";
import {useArgs} from "@storybook/preview-api";

export const MultiSelect: ReactMediaLibraryStory = (args: ReactMediaLibraryProps) => {
	const [{}, updateArgs] = useArgs<ReactMediaLibraryProps>();

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
			/>
		</React.Fragment>
	);
}
MultiSelect.args = {
	...storiesDefaultPrimaryArgs,
	multiSelect: true,
};
