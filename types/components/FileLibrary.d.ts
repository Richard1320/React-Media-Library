export interface FileLibraryListItem {
	title?: string;
	size?: number;
	createdAt?: Date;
	url: string;
	description?: string;
	fileName: string;
}

export interface FileLibraryProps {
	fileLibraryList: FileLibraryListItem[];
	sortProperty?: "title" | "createdAt" | "size" | "fileName";
	sortAscending?: boolean;
	fileSelectCallback: (item: FileLibraryListItem) => void;
}