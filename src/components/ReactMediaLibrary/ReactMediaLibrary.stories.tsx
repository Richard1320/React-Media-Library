import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import ReactMediaLibrary from "./ReactMediaLibrary";
import {FileLibraryListItem,  ReactMediaLibraryProps} from "../../../types";
import convertFileToBase64 from "../../utils/convertFileToBase64";

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

const primaryArgs: ReactMediaLibraryProps = {
	multiSelect: false,
	show: true,
	onHide: () => alert("Hide React Media Library"),
	fileUploadCallback: fileUploadCallback,
	fileLibraryList: fileLibraryList,
	fileSelectCallback: (item) => alert(`Select item ${item._id}`),
	fileDeleteCallback: (item) => alert(`Delete item ${item._id}`),
};

async function fileUploadCallback(file: File): Promise<boolean> {
	try {
		const fileBase64 = await convertFileToBase64(file);
		alert(`Upload file ${file.name}\n ${fileBase64}`);
		return true;
	} catch {
		return false;
	}
}

export const Primary: Story = (args: ReactMediaLibraryProps) => (
	<ReactMediaLibrary
		{...args}
	/>
);
Primary.args = {
	...primaryArgs,
};

export const Empty: Story = (args: ReactMediaLibraryProps) => (
	<ReactMediaLibrary
		{...args}
	/>
);
Empty.args = {
	...primaryArgs,
	fileLibraryList: [],
};

export const MultiSelect: Story = (args: ReactMediaLibraryProps) => (
	<ReactMediaLibrary
		{...args}
	/>
);
MultiSelect.args = {
	...primaryArgs,
	multiSelect: true,
	multiSelectCallback: (items) => alert(`Select items ${items.map(i => i._id).join(", ")}`),
	multiDeleteCallback: (items) => alert(`Delete items ${items.map(i => i._id).join(", ")}`),
};

