import {ReactElement} from "react";
import {FileLibraryListItem} from "./FileLibrary";

export interface FileLibrarySelectedItemsProps {
	itemComponent?: (item: FileLibraryListItem) => ReactElement;
}
