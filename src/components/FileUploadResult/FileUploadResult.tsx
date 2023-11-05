import React, {ReactElement} from "react";
import {FileUploadListProps, FileUploadListItem} from "../../../types";

export enum FileUploadStatus {
	FAILED = "failed",
	PROCESSING = "processing",
	SUCCESS = "success",
}

function renderIcon(status: FileUploadStatus): ReactElement {
	switch (status) {
		case FileUploadStatus.FAILED:
			return (
				<span className="icon-failed"/>
			);
		case FileUploadStatus.PROCESSING:
			return (
				<span className="icon-processing"/>
			);
		case FileUploadStatus.SUCCESS:
			return (
				<span className="icon-success"/>
			);
	}
}

function renderBadge(status: FileUploadStatus): ReactElement {
	switch (status) {
		case FileUploadStatus.FAILED:
			return (
				<div className="react-media-library__file-upload-result__list__item__icon-failed">
					Failed
				</div>
			);
		case FileUploadStatus.PROCESSING:
			return (
				<div className="react-media-library__file-upload-result__list__item__icon-processing">
					Processing
				</div>
			);
		case FileUploadStatus.SUCCESS:
			return (
				<div className="react-media-library__file-upload-result__list__item__icon-success">
					Success
				</div>
			);
	}
}

const FileUploadResult: React.FC<FileUploadListProps> = (props: FileUploadListProps): ReactElement => {
	function renderList(): ReactElement[] {
		return props.fileUploadList.map((element: FileUploadListItem, index: number) => {
			return (
				<li
					key={index}
					className={`react-media-library__file-upload-result__list__item status-${element.status}`}
				>
					{renderIcon(element.status)}
					<div className="react-media-library__file-upload-result__list__item__filename">
						{element.fileName}
					</div>
					{renderBadge(element.status)}
				</li>
			);
		});
	}

	return (
		<div className="react-media-library__file-upload-result">
			<h3>Uploaded Files</h3>
			<ul className="react-media-library__file-upload-result__list">
				{renderList()}
			</ul>
		</div>
	);
};

export default FileUploadResult;
