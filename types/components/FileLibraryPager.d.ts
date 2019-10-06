export interface FileLibraryPagerProps {
	page: number;
	itemsPerPage: number;
	pagerCallback: (number: number) => void;
	count: number;
	offsetDisplay?: number;
}

