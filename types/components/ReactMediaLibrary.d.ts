import * as React from 'react';
import {FileUploadProps} from "./FileUpload";
import {FileLibraryListItem, FileLibraryProps} from "./FileLibrary";
import {Dispatch, SetStateAction} from "react";

export type ReactMediaLibraryContextType = FileUploadProps & FileLibraryProps & {
	selectedItems: Array<FileLibraryListItem>;
	setSelectedItems: Dispatch<SetStateAction<Array<FileLibraryListItem>>>;
};

export interface ReactMediaLibraryProps extends FileUploadProps, FileLibraryProps {
	/** Control to show or hide the modal. **/
	show: boolean;
	/** Function that gets called when the user clicks on the close button on the top right or gray overlay background. **/
	onHide: () => void;
	/** Title that displays at the top of the modal. **/
	modalTitle?: string;
	/** Default item(s) to be selected if ID is provided. **/
	defaultSelectedItemIds?: Array<string | number>;
}

export const ReactMediaLibrary: React.FC<ReactMediaLibraryProps>;
