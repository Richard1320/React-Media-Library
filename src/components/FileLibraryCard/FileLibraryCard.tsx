import React, {ReactElement, useContext} from "react";
import formatBytes from "../../utils/formatBytes";
import formatDate from "../../utils/formatDate";
import {FileLibraryListItem} from "../../../types";
import {ReactMediaLibraryContext} from "../../context/ReactMediaLibraryContext";

const FileLibraryCard: React.FC<FileLibraryListItem> = (props: FileLibraryListItem): ReactElement => {
	const {selectedItems} = useContext(ReactMediaLibraryContext);
	const isSelected: boolean = !!selectedItems?.find((element) => element._id === props._id);

	return (
		<div
			className={`react-media-library__file-library-card ${(isSelected) && "is-active"}`}
		>
			{(props.thumbnailUrl) && (
				<img
					className="react-media-library__file-library-card__image"
					src={props.thumbnailUrl}
					alt={props.title}
				/>
			)}
			{(props.title) && (
				<h4 className="react-media-library__file-library-card__title">
					{props.title}
				</h4>
			)}
			<ul className="react-media-library__file-library-card__list">
				{(props.fileName) && (
					<li className="react-media-library__file-library-card__list__item">
						{props.fileName}
					</li>
				)}
				{(props.size) && (
					<li className="react-media-library__file-library-card__list__item">
						{formatBytes(props.size)}
					</li>
				)}
				{(props.createdAt) && (
					<li className="react-media-library__file-library-card__list__item">
						{formatDate(props.createdAt)}
					</li>
				)}
			</ul>
		</div>
	);
};

export default FileLibraryCard;
