import {FileLibraryListItem, ReactMediaLibraryProps} from "../../../../types";
import ReactMediaLibrary from "../ReactMediaLibrary";
import React, {useEffect, useState} from "react";
import {ReactMediaLibraryStory, storiesDefaultPrimaryArgs} from "./_defaults";
import {useArgs} from '@storybook/preview-api';
import {storiesDefaultFileLibraryList} from "./_storiesDefaultFileLibraryList";

export const Primary: ReactMediaLibraryStory = (args: ReactMediaLibraryProps) => {
	const [fileLibraryList, setFileLibraryList] = useState<Array<FileLibraryListItem>>([]);
	const [myChosenItem, setMyChosenItem] = useState<FileLibraryListItem>();
	const [{isOpen}, updateArgs] = useArgs<ReactMediaLibraryProps>();

	useEffect(() => {
		void fetchAssets();
	}, []);

	/** Simulate async loading of assets. **/
	async function fetchAssets(): Promise<void> {
		const myRandomItem: FileLibraryListItem = storiesDefaultFileLibraryList[Math.floor(Math.random() * args.fileLibraryList.length)];
		setFileLibraryList(storiesDefaultFileLibraryList);
		setMyChosenItem(myRandomItem);
	}

	return (
		<React.Fragment>
			<button
				onClick={() => updateArgs({isOpen: true})}
			>
				Open Media Library
			</button>

			{(myChosenItem) && (
				<div>
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
				</div>
			)}

			<ReactMediaLibrary
				{...args}
				isOpen={isOpen}
				onClose={() => updateArgs({isOpen: false})}
				fileLibraryList={fileLibraryList}
				defaultSelectedItemIds={[myChosenItem?._id || ""]}
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
	fileLibraryList: [],
};
