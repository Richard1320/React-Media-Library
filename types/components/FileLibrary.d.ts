import {ReactElement} from "react";

export interface FileLibraryListItem {
	_id: string | number;
	title?: string;
	size?: number;
	createdAt?: Date | number | string;
	thumbnailUrl?: string;
	description?: string;
	fileName?: string;

	[key: string]: any;
}

export type FileLibraryProps = {
	fileLibraryList: Array<FileLibraryListItem>;
	sortProperty?: "title" | "createdAt" | "size" | "fileName";
	sortAscending?: boolean;
	libraryCardComponent?: (item: FileLibraryListItem) => ReactElement;
	topBarComponent?: () => ReactElement;
	selectedItemsComponent?: () => ReactElement;
} & ({
	fileSelectCallback: (item: FileLibraryListItem) => void;
	fileDeleteCallback?: (item: FileLibraryListItem) => void;
	multiSelect?: false;
} | {
	multiSelectCallback: (items: Array<FileLibraryListItem>) => void;
	multiDeleteCallback?: (items: Array<FileLibraryListItem>) => void;
	multiSelect: true;
})
