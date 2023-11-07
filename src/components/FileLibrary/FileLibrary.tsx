import React, {ReactElement, useContext, useState} from "react";
import FileLibraryPager from "../FileLibraryPager/FileLibraryPager";
import {FileLibraryListItem} from "../../../types";
import {ReactMediaLibraryContext} from "../../context/ReactMediaLibraryContext";

const FileLibrary: React.FC = (): ReactElement => {
	const reactMediaLibraryContext = useContext(ReactMediaLibraryContext);
	const [selectedItems, setSelectedItems] = useState<Array<FileLibraryListItem>>([]);
	const [page, setPage] = useState<number>(1);
	const itemsPerPage = 12;

	function sortArray(a: FileLibraryListItem, b: FileLibraryListItem): -1 | 0 | 1 {
		try {
			const property = reactMediaLibraryContext.sortProperty;
			let valA: any = property !== undefined ? a[property] : 0;
			let valB: any = property !== undefined ? b[property] : 0;

			// If value is type string, ignore upper and lowercase
			if (typeof valA === "string") valA = valA.toUpperCase();
			if (typeof valB === "string") valB = valB.toUpperCase();

			if (reactMediaLibraryContext.sortAscending) {
				return (valA < valB) ? -1 : 1;
			} else {
				return (valA > valB) ? -1 : 1;
			}
		} catch {
			return 0;
		}
	}

	function onSelect(item: FileLibraryListItem) {
		if (reactMediaLibraryContext.multiSelect) {
			const newSelectedItems = [...selectedItems];
			const foundIndex = newSelectedItems.findIndex((element) => element._id === item._id);
			if (foundIndex > -1) {
				// Remove item from selected list if already exists
				newSelectedItems.splice(foundIndex, 1);
			} else {
				// Add item to selected list if not exists
				newSelectedItems.push(item);
			}
			setSelectedItems(newSelectedItems);
		} else {
			setSelectedItems([item]);
		}
	}

	function renderList(): ReactElement[] {
		if (!reactMediaLibraryContext.fileLibraryList) return [];

		const arrayStart = (page - 1) * itemsPerPage;
		let arrayEnd = arrayStart + itemsPerPage;
		if (arrayEnd > reactMediaLibraryContext.fileLibraryList.length) {
			// If calculated end extends past length of actual array
			// Set calculated end as length of array
			arrayEnd = reactMediaLibraryContext.fileLibraryList.length;
		}

		return [...reactMediaLibraryContext.fileLibraryList]
			.sort(sortArray)
			.slice(arrayStart, arrayEnd)
			.map((element: FileLibraryListItem, index: number) => {
				const isSelected: boolean = !!selectedItems.find((item) => item._id === element._id);
				return (
					<li
						key={index}
						className={`react-media-library__file-library__list__item ${(isSelected) && "is-selected"}`}
						onClick={() => onSelect(element)}
					>
						{reactMediaLibraryContext.libraryCardComponent?.(element, isSelected)}
					</li>
				);
			});
	}

	return (
		<div className="react-media-library__file-library">

			{(reactMediaLibraryContext.topBarComponent) && (
				<div className="react-media-library__file-library__top-bar">
					{reactMediaLibraryContext.topBarComponent()}
				</div>
			)}

			{(reactMediaLibraryContext.fileLibraryList?.length) ? (
				<ul className="react-media-library__file-library__list">
					{renderList()}
				</ul>
			) : (
				<p className="react-media-library__file-library__empty">
					No files available. Please upload a file.
				</p>
			)}

			{(reactMediaLibraryContext.fileLibraryList?.length > itemsPerPage) && (
				<FileLibraryPager
					count={reactMediaLibraryContext.fileLibraryList.length}
					page={page}
					pagerCallback={(number: number) => setPage(number)}
					itemsPerPage={itemsPerPage}
				/>
			)}

			{(selectedItems.length > 0) && (
				<div className="react-media-library__file-library__actions">
					{(reactMediaLibraryContext.multiSelect) ? (
						<React.Fragment>
							<button
								className="react-media-library__file-library__actions__select"
								onClick={() => reactMediaLibraryContext.multiSelectCallback(selectedItems)}
							>
								Select {selectedItems.length} Files
							</button>
							{(reactMediaLibraryContext.multiDeleteCallback !== undefined) && (
								<button
									className="react-media-library__file-library__actions__delete"
									onClick={() => reactMediaLibraryContext.multiDeleteCallback?.(selectedItems)}
								>
									Delete {selectedItems.length} Files
								</button>
							)}
						</React.Fragment>
					) : (
						<React.Fragment>
							<button
								className="react-media-library__file-library__actions__select"
								onClick={() => reactMediaLibraryContext.fileSelectCallback(selectedItems[0])}
							>
								Select File
							</button>
							{(reactMediaLibraryContext.fileDeleteCallback !== undefined) && (
								<button
									className="react-media-library__file-library__actions__delete"
									onClick={() => reactMediaLibraryContext.fileDeleteCallback?.(selectedItems[0])}
								>
									Delete File
								</button>
							)}
						</React.Fragment>
					)}

				</div>
			)}

		</div>
	);
};

export default FileLibrary;
