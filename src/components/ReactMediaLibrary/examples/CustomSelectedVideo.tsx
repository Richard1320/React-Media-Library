import {FileLibraryListItem, ReactMediaLibraryProps} from "../../../../types";
import ReactMediaLibrary from "../ReactMediaLibrary";
import React, {ReactElement} from "react";
import {ReactMediaLibraryStory, storiesDefaultPrimaryArgs} from "./_defaults";
import {useArgs} from "@storybook/preview-api";
import {FileLibrarySelectedItems} from "../../FileLibrarySelectedItems";

const CustomSelectedFormVideoComponent: React.FC<FileLibraryListItem> = (props: FileLibraryListItem): ReactElement => {
	return (
		<div>
			<video
				controls={true}
				poster={props.thumbnailUrl}
				autoPlay={true}
				style={{
					width: "100%",
				}}
			>
				<source
					src={props.fileName}
					type="video/mp4"
				/>
			</video>
			<p>
				{props.fileName}
			</p>
		</div>
	);
}
export const CustomSelectedVideo: ReactMediaLibraryStory = (args: ReactMediaLibraryProps) => {
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
CustomSelectedVideo.args = {
	...storiesDefaultPrimaryArgs,
	selectedItemsComponent: () => (
		<FileLibrarySelectedItems
			itemComponent={(item) => (<CustomSelectedFormVideoComponent {...item} />)}
		/>
	),
	fileLibraryList: [
		{
			"_id": "6549e02fb0612d12ca163aaa",
			"title": "amet qui sunt",
			"description": "Deserunt et reprehenderit ut qui ea ex excepteur incididunt velit. Reprehenderit dolor dolor dolore non occaecat cillum aute fugiat ea nisi nostrud. Occaecat velit excepteur non aliquip nulla. Dolor consectetur ullamco consequat sint dolor Lorem dolor. Est laborum laborum esse duis dolor occaecat aliqua esse quis sit nulla qui ad irure. Incididunt excepteur aute mollit voluptate mollit veniam et nostrud deserunt voluptate.\r\n",
			"size": 187657,
			"fileName": "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
			"thumbnailUrl": "https://www.videoplaceholder.com/static/BigBuckBunny-4979b146b7d4a6c16ae8badfe426fb6e.jpg",
			"createdAt": 1208133942801
		},
		{
			"_id": "6549e02feac54a219585b848",
			"title": "laboris excepteur voluptate",
			"description": "Proident ea aliquip ad sit et. Culpa ex qui ad qui proident aliquip veniam dolor deserunt eu nisi consequat esse cupidatat. Qui dolore aliqua magna est labore consectetur non elit. Culpa proident consectetur proident nostrud do sint velit dolor ullamco nisi est pariatur. Ex esse cupidatat tempor dolor quis sunt dolore in in proident eiusmod nisi proident quis. Veniam consectetur reprehenderit quis do dolor proident sint dolor. Ex irure sunt proident sunt.\r\n",
			"size": 119197,
			"fileName": "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
			"thumbnailUrl": "https://www.videoplaceholder.com/static/ElephantsDream-0ba875c5c7a5731b1bd50922fb3efe93.jpg",
			"createdAt": 1136027683961
		},
		{
			"_id": "6549e02facf16ff0674e9b9d",
			"title": "cupidatat ad ex",
			"description": "Ut nisi et consectetur enim culpa exercitation minim voluptate aute incididunt laborum consectetur consectetur. Sunt ullamco amet laborum nulla ut. Enim pariatur amet incididunt voluptate magna.\r\n",
			"size": 171436,
			"fileName": "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
			"thumbnailUrl": "https://www.videoplaceholder.com/static/ForBiggerBlazes-fdb2497966d4956ef5b7ffc22d1f1c0d.jpg",
			"createdAt": 1848445892836
		},
	],
};
