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
	isOpen: boolean;
	/** Function that gets called when the user clicks on the close button on the top right or gray overlay background. **/
	onClose: () => void;
	/** Title that displays at the top of the modal. **/
	modalTitle?: string;
}

export const ReactMediaLibrary: React.FC<ReactMediaLibraryProps>;
