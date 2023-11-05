import {FileUploadStatus} from "../../src/components/FileUploadResult/FileUploadResult";

export interface FileMeta {
	fileName: string;
	type: string;
	size: number;
}

export interface FileUploadProps {
	fileUploadCallback: (data: string, meta: FileMeta) => Promise<boolean>;
}

export interface FileUploadListItem {
	fileName: string;
	status: FileUploadStatus;
}
