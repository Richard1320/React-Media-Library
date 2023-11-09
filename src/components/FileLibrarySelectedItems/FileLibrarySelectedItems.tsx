import React, {ReactElement, useContext} from "react";
import {ReactMediaLibraryContext} from "../../context/ReactMediaLibraryContext";
import {FileLibrarySelectedItemsCard} from "../FileLibrarySelectedItemsCard";
import {FileLibrarySelectedItemsProps} from "../../../types";

const FileLibrarySelectedItems: React.FC<FileLibrarySelectedItemsProps> = (props: FileLibrarySelectedItemsProps): ReactElement => {
	const reactMediaLibraryContext = useContext(ReactMediaLibraryContext);

	return (
		<div
			className="react-media-library__file-library-selected-items"
		>
			<ul className="react-media-library__file-library-selected-items__list">
				{reactMediaLibraryContext.selectedItems.map((item) => (
					<li
						key={`item-${item._id}`}
						className="react-media-library__file-library-selected-items__list__item"
					>
						{props.itemComponent?.(item)}
					</li>
				))}
			</ul>

			<div className="react-media-library__file-library-selected-items__actions">
				{(reactMediaLibraryContext.multiSelect) ? (
					<React.Fragment>
						<button
							className="react-media-library__file-library-selected-items__actions__select"
							onClick={() => reactMediaLibraryContext.multiSelectCallback(reactMediaLibraryContext.selectedItems)}
						>
							Select {reactMediaLibraryContext.selectedItems.length} Files
						</button>
						{(reactMediaLibraryContext.multiDeleteCallback !== undefined) && (
							<button
								className="react-media-library__file-library-selected-items__actions__delete"
								onClick={() => reactMediaLibraryContext.multiDeleteCallback?.(reactMediaLibraryContext.selectedItems)}
							>
								Delete {reactMediaLibraryContext.selectedItems.length} Files
							</button>
						)}
					</React.Fragment>
				) : (
					<React.Fragment>
						<button
							className="react-media-library__file-library-selected-items__actions__select"
							onClick={() => reactMediaLibraryContext.fileSelectCallback(reactMediaLibraryContext.selectedItems[0])}
						>
							Select File
						</button>
						{(reactMediaLibraryContext.fileDeleteCallback !== undefined) && (
							<button
								className="react-media-library__file-library-selected-items__actions__delete"
								onClick={() => reactMediaLibraryContext.fileDeleteCallback?.(reactMediaLibraryContext.selectedItems[0])}
							>
								Delete File
							</button>
						)}
					</React.Fragment>
				)}

			</div>
		</div>
	);
};

FileLibrarySelectedItems.defaultProps = {
	itemComponent: (item) => (<FileLibrarySelectedItemsCard{...item} />),
};

export default FileLibrarySelectedItems;
