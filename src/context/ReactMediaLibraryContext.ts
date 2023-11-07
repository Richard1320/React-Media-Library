import {createContext} from "react";
import {ReactMediaLibraryContextType} from "../../types";

const reactMediaLibraryDefaultContext: ReactMediaLibraryContextType = {
	fileLibraryList: [],
	fileUploadCallback: async () => false,
	multiSelectCallback:  () => {},
	fileSelectCallback: () => {},
	sortProperty: "createdAt",
	sortAscending: false,
}

export const ReactMediaLibraryContext = createContext<ReactMediaLibraryContextType>(reactMediaLibraryDefaultContext);
