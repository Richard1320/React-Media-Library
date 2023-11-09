import * as React from 'react';
import {FileUploadProps} from "./FileUpload";
import {FileLibraryListItem, FileLibraryProps} from "./FileLibrary";
import {Dispatch, SetStateAction} from "react";

export type ReactMediaLibraryContextType = FileUploadProps & FileLibraryProps & {
	selectedItems: Array<FileLibraryListItem>;
	setSelectedItems: Dispatch<SetStateAction<Array<FileLibraryListItem>>>;
};

export type ReactMediaLibraryProps = {
	show: boolean;
	onHide: () => void;
	modalTitle?: string;
} & FileUploadProps & FileLibraryProps;

export const ReactMediaLibrary: React.FC<ReactMediaLibraryProps>;
