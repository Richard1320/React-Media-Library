import React, {ReactElement, useContext, useState} from "react";
import FileLibraryPager from "../FileLibraryPager/FileLibraryPager";
import {FileLibraryListItem} from "../../../types";
import {ReactMediaLibraryContext} from "../../context/ReactMediaLibraryContext";

const FileLibrary: React.FC = (): ReactElement => {
	const {
		selectedItems,
		setSelectedItems,
		sortProperty,
		sortAscending,
		multiSelect,
		fileLibraryList,
		libraryCardComponent,
		topBarComponent,
		selectedItemsComponent
	} = useContext(ReactMediaLibraryContext);
	const [page, setPage] = useState<number>(1);
	const itemsPerPage = 12;

	function sortArray(a: FileLibraryListItem, b: FileLibraryListItem): -1 | 0 | 1 {
		try {
			let valA: any = (sortProperty && a[sortProperty]) ? a[sortProperty] : 0;
			let valB: any = (sortProperty && b[sortProperty]) ? b[sortProperty] : 0;

			// If value is type string, ignore upper and lowercase
			if (typeof valA === "string") valA = valA.toUpperCase();
			if (typeof valB === "string") valB = valB.toUpperCase();

			if (sortAscending) {
				return (valA < valB) ? -1 : 1;
			} else {
				return (valA > valB) ? -1 : 1;
			}
		} catch {
			return 0;
		}
	}

	function onSelect(item: FileLibraryListItem) {
		const foundIndex = selectedItems.findIndex((element) => element._id === item._id);
		if (multiSelect) {
			const newSelectedItems = [...selectedItems];
			if (foundIndex > -1) {
				// Remove item from selection if already exists
				newSelectedItems.splice(foundIndex, 1);
			} else {
				// Add item to selection if not exists
				newSelectedItems.push(item);
			}
			setSelectedItems(newSelectedItems);
		} else {
			if (foundIndex > -1) {
				// Remove item from selection
				setSelectedItems([]);
			} else {
				// Add item to selection
				setSelectedItems([item]);
			}
		}
	}

	function renderList(): ReactElement[] {
		if (!fileLibraryList) return [];

		const arrayStart = (page - 1) * itemsPerPage;
		let arrayEnd = arrayStart + itemsPerPage;
		if (arrayEnd > fileLibraryList.length) {
			// If calculated end extends past length of actual array
			// Set calculated end as length of array
			arrayEnd = fileLibraryList.length;
		}

		return [...fileLibraryList]
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
						{libraryCardComponent?.(element)}
					</li>
				);
			});
	}

	return (
		<div className={`react-media-library__file-library ${(selectedItems.length > 0) && "has-selected"}`}>

			{(topBarComponent) && (
				<div className="react-media-library__file-library__top-bar">
					{topBarComponent()}
				</div>
			)}

			<div className="react-media-library__file-library__row">
				<div className="react-media-library__file-library__main">

					{(fileLibraryList?.length) ? (
						<ul className="react-media-library__file-library__list">
							{renderList()}
						</ul>
					) : (
						<p className="react-media-library__file-library__empty">
							No files available. Please upload a file.
						</p>
					)}

					{(fileLibraryList?.length > itemsPerPage) && (
						<FileLibraryPager
							count={fileLibraryList.length}
							page={page}
							pagerCallback={(number: number) => setPage(number)}
							itemsPerPage={itemsPerPage}
						/>
					)}
				</div>

				{(selectedItems.length > 0) && selectedItemsComponent?.()}

			</div>

		</div>
	);
};

export default FileLibrary;
