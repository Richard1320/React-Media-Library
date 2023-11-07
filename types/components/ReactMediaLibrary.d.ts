import * as React from 'react';
import {FileUploadProps} from "./FileUpload";
import {FileLibraryProps} from "./FileLibrary";

export type ReactMediaLibraryProps = {
	show: boolean;
	onHide: () => void;
	modalTitle?: string;
} & FileUploadProps & FileLibraryProps;

export const ReactMediaLibrary: React.FC<ReactMediaLibraryProps>;
