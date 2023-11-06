import {FileUploadStatus} from "../../src/components/FileUploadResult/FileUploadResult";

export interface FileUploadProps {
	fileUploadCallback: (file: File) => Promise<boolean>;
}

export interface FileUploadListItem {
	fileName: string;
	status: FileUploadStatus;
}
