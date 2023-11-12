import {ReactElement} from "react";

export interface FileLibraryListItem {
	/** Unique identifier for this item. Required to properly select the item in browse tab. **/
	_id: string | number;
	/** Displayed title. **/
	title?: string;
	/** Size of file in Bytes. **/
	size?: number;
	/** Date that the file was created. **/
	createdAt?: Date | number | string;
	/** URL for thumbnail to display image in browse tab. **/
	thumbnailUrl?: string;
	/** Displayed description on card in browse tab. **/
	description?: string;
	/** Displayed filename on card in browse tab. **/
	fileName?: string;

	/** Any other properties that you put in will be returned in the item data in the select, delete, & render component callbacks. **/
	[key: string]: any;
}

export interface FileLibraryProps {
	/** Full list of items to render in the browse tab. **/
	fileLibraryList: Array<FileLibraryListItem>;
	/** Property name to sort by. **/
	sortProperty?: "title" | "createdAt" | "size" | "fileName";
	/** Control to invert the sort selection. **/
	sortAscending?: boolean;
	/** Component to render for each selectable item in the browse tab. **/
	libraryCardComponent?: (item: FileLibraryListItem) => ReactElement;
	/** Component to render at the top of the modal browse tab. Mostly used for custom search bars / filters. **/
	topBarComponent?: () => ReactElement;
	/** Component to render on the side with an array of selected items. **/
	selectedItemsComponent?: () => ReactElement;
	/** Function that gets called when the user submits their file selection. **/
	filesSelectCallback: (items: Array<FileLibraryListItem>) => void;
	/** Function that gets called when the user deletes their file selection. **/
	filesDeleteCallback?: (items: Array<FileLibraryListItem>) => void;
	/** Allows the user to select multiple items to submit or delete. **/
	multiSelect?: boolean;
}
