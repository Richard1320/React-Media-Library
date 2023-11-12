import {FileLibraryListItem, ReactMediaLibraryProps} from "../../../../types";
import ReactMediaLibrary from "../ReactMediaLibrary";
import React, {useState} from "react";
import {ReactMediaLibraryStory, storiesDefaultPrimaryArgs} from "./_defaults";
import {useArgs} from '@storybook/preview-api';

export const Primary: ReactMediaLibraryStory = (args: ReactMediaLibraryProps) => {
	const myRandomItem: FileLibraryListItem = args.fileLibraryList[Math.floor(Math.random() * args.fileLibraryList.length)];
	const [myChosenItem, setMyChosenItem] = useState<FileLibraryListItem>(myRandomItem);
	const [{isOpen}, updateArgs] = useArgs<ReactMediaLibraryProps>();

	return (
		<React.Fragment>
			<button
				onClick={() => updateArgs({isOpen: true})}
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
				isOpen={isOpen}
				onClose={() => updateArgs({isOpen: false})}
				defaultSelectedItemIds={[myRandomItem._id]}
				filesSelectCallback={(items) => {
					setMyChosenItem(items[0]);
					updateArgs({isOpen: false});
				}}
			/>
		</React.Fragment>
	);
}
Primary.args = {
	...storiesDefaultPrimaryArgs,
	isOpen: false,
};
