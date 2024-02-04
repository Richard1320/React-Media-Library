import React, {ReactElement, useContext} from "react";
import {ReactMediaLibraryContext} from "../../context/ReactMediaLibraryContext";
import {FileLibrarySelectedItemsCard} from "../FileLibrarySelectedItemsCard";
import {FileLibrarySelectedItemsProps} from "../../../types";

const FileLibrarySelectedItems: React.FC<FileLibrarySelectedItemsProps> = ({
	itemComponent = (item) => (<FileLibrarySelectedItemsCard{...item} />),
}: FileLibrarySelectedItemsProps): ReactElement => {
	const {selectedItems, filesSelectCallback, filesDeleteCallback} = useContext(ReactMediaLibraryContext);

	return (
		<div
			className="react-media-library__file-library-selected-items"
		>
			<ul className="react-media-library__file-library-selected-items__list">
				{selectedItems.map((item) => (
					<li
						key={`item-${item._id}`}
						className="react-media-library__file-library-selected-items__list__item"
					>
						{itemComponent?.(item)}
					</li>
				))}
			</ul>

			<div className="react-media-library__file-library-selected-items__actions">
				{(filesDeleteCallback !== undefined) && (
					<button
						className="react-media-library__file-library-selected-items__actions__delete"
						onClick={() => filesDeleteCallback?.(selectedItems)}
					>
						Delete {selectedItems.length > 1 ? selectedItems.length : ""} File{selectedItems.length > 1 ? "s" : ""}
					</button>
				)}
				<button
					className="react-media-library__file-library-selected-items__actions__select"
					onClick={() => filesSelectCallback(selectedItems)}
				>
					Select {selectedItems.length > 1 ? selectedItems.length : ""} File{selectedItems.length > 1 ? "s" : ""}
				</button>

			</div>
		</div>
	);
};

export default FileLibrarySelectedItems;
