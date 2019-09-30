export interface FileMeta {
	fileName: string;
	type: string;
	size: number;
}

export interface FileUploadProps {
	fileUploadCallback: (data: string | ArrayBuffer | null, meta: FileMeta) => Promise<boolean>;
}

export interface FileUploadListItem {
	name: string;
	status: number;
}