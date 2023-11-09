import {FileLibraryListItem, ReactMediaLibraryProps} from "../../../../types";
import ReactMediaLibrary from "../ReactMediaLibrary";
import React, {useState} from "react";
import {ReactMediaLibraryStory, storiesDefaultPrimaryArgs} from "./_defaults";

export const Primary: ReactMediaLibraryStory = (args: ReactMediaLibraryProps) => {
	const myRandomItem: FileLibraryListItem = args.fileLibraryList[Math.floor(Math.random() * args.fileLibraryList.length)];
	const [showMediaLibrary, setShowMediaLibrary] = useState<boolean>(false);
	const [myChosenItem, setMyChosenItem] = useState<FileLibraryListItem>(myRandomItem);

	return (
		<React.Fragment>
			<button
				onClick={() => setShowMediaLibrary(true)}
			>
				Open Media Library
			</button>

			<p>
				<strong>My selected file</strong>
			</p>

			<div
				style={{
					width: "20rem",
				}}
			>
				<img
					src={myChosenItem.thumbnailUrl}
					alt={myChosenItem.title}
					style={{
						width: "100%",
						height: "auto",
					}}
				/>
			</div>

			<p>
				Title: {myChosenItem.title}<br/>
				Filename: {myChosenItem.fileName}
			</p>

			<ReactMediaLibrary
				{...args}
				show={showMediaLibrary}
				onHide={() => setShowMediaLibrary(false)}
				defaultSelectedItemIds={[myRandomItem._id]}
				filesSelectCallback={(items) => {
					setMyChosenItem(items[0]);
					setShowMediaLibrary(false);
				}}
			/>
		</React.Fragment>
	);
}
Primary.args = {
	...storiesDefaultPrimaryArgs,
};
