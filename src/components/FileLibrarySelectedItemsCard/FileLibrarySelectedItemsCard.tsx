import React, {ReactElement, useContext} from "react";
import {FileLibraryListItem} from "../../../types";
import {ReactMediaLibraryContext} from "../../context/ReactMediaLibraryContext";

const FileLibrarySelectedItemsCard: React.FC<FileLibraryListItem> = (props: FileLibraryListItem): ReactElement => {
	const {selectedItems, setSelectedItems} = useContext(ReactMediaLibraryContext);

	function onRemove() {
		const newSelectedItems = [...selectedItems];
		const foundIndex = newSelectedItems.findIndex((element) => element._id === props._id);
		if (foundIndex > -1) {
			newSelectedItems.splice(foundIndex, 1);
		}
		setSelectedItems(newSelectedItems);
	}

	return (
		<div
			className="react-media-library__file-library-selected-items-card"
		>
			{(props.thumbnailUrl) && (
				<img
					className="react-media-library__file-library-selected-items-card__image"
					src={props.thumbnailUrl}
					alt={props.title}
				/>
			)}
			<div className="react-media-library__file-library-selected-items-card__info">
				<div className="react-media-library__file-library-selected-items-card__title">
					{props.title}
				</div>
				<div className="react-media-library__file-library-selected-items-card__description">
					{props.description}
				</div>
				<div className="react-media-library__file-library-selected-items-card__file-name">
					{props.fileName}
				</div>
			</div>
			<div className="react-media-library__file-library-selected-items-card__actions">
				<button
					type="button"
					title="Remove from selected list"
					onClick={onRemove}
				>
					<span className="icon-close"/>
				</button>
			</div>
		</div>
	);
}

export default FileLibrarySelectedItemsCard;
