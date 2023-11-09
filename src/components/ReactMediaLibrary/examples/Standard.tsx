import {ReactMediaLibraryProps} from "../../../../types";
import ReactMediaLibrary from "../ReactMediaLibrary";
import React, {useState} from "react";
import {ReactMediaLibraryStory, storiesDefaultPrimaryArgs} from "./_defaults";

export const Standard: ReactMediaLibraryStory = (args: ReactMediaLibraryProps) => {
	const [showMediaLibrary, setShowMediaLibrary] = useState<boolean>(false);
	return (
		<React.Fragment>
			<button
				onClick={() => setShowMediaLibrary(true)}
			>
				Open Media Library
			</button>
			<ReactMediaLibrary
				{...args}
				show={showMediaLibrary}
				onHide={() => setShowMediaLibrary(false)}
			/>
		</React.Fragment>
	);
}
Standard.args = {
	...storiesDefaultPrimaryArgs,
};
