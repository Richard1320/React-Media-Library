import React, {ReactElement} from "react";
import formatBytes from "../../utils/formatBytes";
import formatDate from "../../utils/formatDate";
import {FileLibraryListItem} from "../../../types";

interface IProps extends FileLibraryListItem {
	isSelected?: boolean;
}

const FileLibraryCard: React.FC<IProps> = (props: IProps): ReactElement => {

	return (
		<div
			className={`react-media-library__file-library-card ${(props.selectedItem?._id === props._id) && "is-active"}`}
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
			{(props.description) && (
				<div className="react-media-library__file-library-card__description">
					{props.description}
				</div>
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
