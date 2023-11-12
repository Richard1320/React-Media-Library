import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FileLibraryCard from "./FileLibraryCard";
import {FileLibraryListItem} from "../../../types";

const meta: Meta<typeof FileLibraryCard> = {
	component: FileLibraryCard,
	title: "React-Media-Library/FileLibraryCard",
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FileLibraryCard>;

export const Primary: Story = (args: FileLibraryListItem) => (
	<div
		style={{
			width: "20rem",
		}}
	>
		<FileLibraryCard
			{...args}
		/>
	</div>
);
Primary.args = {
	_id: "primary",
	title: "Primary Image",
	size: 1575684,
	createdAt: new Date(),
	thumbnailUrl: "https://loremflickr.com/640/360",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	fileName: "my-image.jpg",
};

