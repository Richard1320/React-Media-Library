import * as React from "react";
import {ReactElement} from "react";
import {FileLibraryListItem} from "./FileLibrary";

export interface FileLibrarySelectedItemsProps {
	itemComponent?: (item: FileLibraryListItem) => ReactElement;
}

export const FileLibrarySelectedItems: React.FC<FileLibrarySelectedItemsProps>;
