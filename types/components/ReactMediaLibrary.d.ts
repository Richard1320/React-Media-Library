import * as React from 'react';
import {FileUploadProps} from "./FileUpload";
import {FileLibraryProps} from "./FileLibrary";

export type ReactMediaLibraryContextType = FileUploadProps & FileLibraryProps;

export type ReactMediaLibraryProps = {
	show: boolean;
	onHide: () => void;
	modalTitle?: string;
} & ReactMediaLibraryContextType;

export const ReactMediaLibrary: React.FC<ReactMediaLibraryProps>;
