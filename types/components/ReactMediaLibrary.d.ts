import * as React from 'react';
import {FileUploadProps} from "./FileUpload";

export interface ReactMediaLibraryProps extends FileUploadProps {
	show:boolean;
	onHide: () => void;
	modalTitle?: string;
}
export const ReactMediaLibrary: React.FC<ReactMediaLibraryProps>;
