import React, {ReactElement, useState} from "react";
import FileLibraryCard from "../FileLibraryCard/FileLibraryCard";
import FileLibraryPager from "../FileLibraryPager/FileLibraryPager";
import {FileLibraryListItem, FileLibraryProps} from "../../../types";

const FileLibrary: React.FC<FileLibraryProps> = (props: FileLibraryProps): ReactElement => {

	const [selectedItem, setSelectedItem] = useState<FileLibraryListItem | undefined>(undefined);
	const [page, setPage] = useState<number>(1);
	const itemsPerPage = 12;

	function sortArray(a: FileLibraryListItem, b: FileLibraryListItem): -1 | 0 | 1 {
		try {
			const property = props.sortProperty;
			let valA: any = property !== undefined ? a[property] : 0;
			let valB: any = property !== undefined ? b[property] : 0;

			// If value is type string, ignore upper and lowercase
			if (typeof valA === "string") valA = valA.toUpperCase();
			if (typeof valB === "string") valB = valB.toUpperCase();

			if (props.sortAscending) {
				return (valA < valB) ? -1 : 1;
			} else {
				return (valA > valB) ? -1 : 1;
			}
		} catch {
			return 0;
		}
	}

	function renderList(): ReactElement[] {
		if (!props.fileLibraryList) return [];

		const arrayStart = (page - 1) * itemsPerPage;
		let arrayEnd = arrayStart + itemsPerPage;
		if (arrayEnd > props.fileLibraryList.length) {
			// If calculated end extends past length of actual array
			// Set calculated end as length of array
			arrayEnd = props.fileLibraryList.length;
		}

		return [...props.fileLibraryList]
			.sort(sortArray)
			.slice(arrayStart, arrayEnd)
			.map((element: FileLibraryListItem, index: number) => {
				return (
					<li
						key={index}
						className={`react-media-library__file-library__list__item ${(selectedItem?._id === element._id) && "is-selected"}`}
						onClick={() => setSelectedItem(element)}
					>
						{React.createElement(props.libraryCardComponent as React.FC<FileLibraryListItem>, {selectedItem, ...element})}
					</li>
				);
			});
	}

	return (
		<div className="react-media-library__file-library">

			{(props.fileLibraryList?.length) ? (
				<ul className="react-media-library__file-library__list">
					{renderList()}
				</ul>
			) : (
				<p className="react-media-library__file-library__empty">
					No files available. Please upload a file.
				</p>
			)}

			{(props.fileLibraryList?.length > itemsPerPage) && (
				<FileLibraryPager
					count={props.fileLibraryList.length}
					page={page}
					pagerCallback={(number: number) => setPage(number)}
					itemsPerPage={itemsPerPage}
				/>
			)}

			{(selectedItem) && (
				<div className="react-media-library__file-library__actions">
					<button
						className="react-media-library__file-library__actions__select"
						onClick={() => props.fileSelectCallback(selectedItem as FileLibraryListItem)}
					>
						Select File
					</button>
					{(props.fileDeleteCallback !== undefined) && (
						<button
							className="react-media-library__file-library__actions__delete"
							onClick={() => props.fileDeleteCallback?.(selectedItem as FileLibraryListItem)}
						>
							Delete File
						</button>
					)}
				</div>
			)}

		</div>
	);
};

FileLibrary.defaultProps = {
	sortProperty: "createdAt",
	sortAscending: false,
	libraryCardComponent: FileLibraryCard,
};

export default FileLibrary;
