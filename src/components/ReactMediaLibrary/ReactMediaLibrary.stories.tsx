import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import ReactMediaLibrary from "./ReactMediaLibrary";
import {FileLibraryListItem,  ReactMediaLibraryProps} from "../../../types";

const meta: Meta<typeof ReactMediaLibrary> = {
	component: ReactMediaLibrary,
	title: "React-Media-Library/ReactMediaLibrary",
	argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ReactMediaLibrary>;

const fileLibraryList: Array<FileLibraryListItem> = Array.from(Array(20).keys()).map((item, index) => {
	return {
		_id: `image-${index}`,
		title: `Image #${index}`,
		size: Math.floor(Math.random() * 1000000),
		createdAt: new Date(),
		thumbnailUrl: "https://loremflickr.com/640/360",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		fileName: `my-image-${index}.jpg`,
	}
});

export const Primary: Story = (args: ReactMediaLibraryProps) => (
	<ReactMediaLibrary
		{...args}
	/>
);
Primary.args = {
	show: true,
	onHide: () => alert("Hide React Media Library"),
	fileUploadCallback: async (fileBase64, fileMeta) => {alert(`Upload file ${fileMeta.fileName}`);return true;},
	fileLibraryList: fileLibraryList,
	fileSelectCallback: (item) => alert(`Select item ${item._id}`),
	fileDeleteCallback: (item) => alert(`Delete item ${item._id}`),
};

export const Empty: Story = (args: ReactMediaLibraryProps) => (
	<ReactMediaLibrary
		{...args}
	/>
);
Empty.args = {
	show: true,
	onHide: () => alert("Hide React Media Library"),
	fileUploadCallback: async (fileBase64, fileMeta) => {alert(`Upload file ${fileMeta.fileName}`);return true;},
	fileLibraryList: [],
	fileSelectCallback: (item) => alert(`Select item ${item._id}`),
	fileDeleteCallback: (item) => alert(`Delete item ${item._id}`),
};

