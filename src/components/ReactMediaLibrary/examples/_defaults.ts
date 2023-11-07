import {StoryObj} from "@storybook/react";
import ReactMediaLibrary from "../ReactMediaLibrary";
import {ReactMediaLibraryProps} from "../../../../types";
import convertFileToBase64 from "../../../utils/convertFileToBase64";
import {storiesDefaultFileLibraryList} from "./_storiesDefaultFileLibraryList";

export type ReactMediaLibraryStory = StoryObj<typeof ReactMediaLibrary>;

export const storiesDefaultPrimaryArgs: ReactMediaLibraryProps = {
	multiSelect: false,
	show: true,
	onHide: () => alert("Hide React Media Library"),
	fileUploadCallback: storiesDefaultFileUploadCallback,
	fileLibraryList: storiesDefaultFileLibraryList,
	fileSelectCallback: (item) => alert(`Select item ${item._id}`),
	fileDeleteCallback: (item) => alert(`Delete item ${item._id}`),
};

async function storiesDefaultFileUploadCallback(file: File): Promise<boolean> {
	try {
		const fileBase64 = await convertFileToBase64(file);
		alert(`Upload file ${file.name}\n ${fileBase64}`);
		return true;
	} catch {
		return false;
	}
}
