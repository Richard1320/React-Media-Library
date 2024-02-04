import {createContext} from "react";
import {ReactMediaLibraryContextType} from "../../types";

const reactMediaLibraryDefaultContext: ReactMediaLibraryContextType = {
	fileLibraryList: [],
	selectedItems: [],
	setSelectedItems: () => {
	},
	fileUploadCallback: async () => false,
	filesSelectCallback: () => {
	},
	sortProperty: "createdAt",
	sortAscending: false,
	multiSelect: false,
	defaultSelectedItemIds: [],
}

export const ReactMediaLibraryContext = createContext<ReactMediaLibraryContextType>(reactMediaLibraryDefaultContext);
