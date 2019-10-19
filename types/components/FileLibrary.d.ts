export interface FileLibraryListItem {
	title?: string;
	size?: number;
	createdAt?: Date;
	thumbnailUrl?: string;
	description?: string;
	fileName?: string;
	[key: string]: any;
}

export interface FileLibraryProps {
	fileLibraryList: FileLibraryListItem[];
	sortProperty?: "title" | "createdAt" | "size" | "fileName";
	sortAscending?: boolean;
	fileSelectCallback: (item: FileLibraryListItem) => void;
	fileDeleteCallback?: (item: FileLibraryListItem) => void;
}