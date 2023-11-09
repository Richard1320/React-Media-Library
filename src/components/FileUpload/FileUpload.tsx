import React, {ReactElement, useContext, useState} from 'react';
import {DropzoneOptions, useDropzone} from 'react-dropzone';
import FileUploadResult, {FileUploadStatus} from "../FileUploadResult/FileUploadResult";
import {FileUploadListItem} from "../../../types";
import {ReactMediaLibraryContext} from "../../context/ReactMediaLibraryContext";

const FileUpload: React.FC = (): ReactElement => {
	const {fileUploadCallback, finishUploadCallback, acceptedTypes} = useContext(ReactMediaLibraryContext);
	const [fileUploadList, setFileUploadList] = useState<Array<FileUploadListItem>>([]);
	const dropzoneOptions: DropzoneOptions = {
		onDrop,
	};
	// Convert accepted types if provided
	if (acceptedTypes && acceptedTypes.length > 0) {
		dropzoneOptions.accept = {};
		for (const type of acceptedTypes) {
			dropzoneOptions.accept[type] = [];
		}
	}
	const {getRootProps, getInputProps, isDragActive} = useDropzone(dropzoneOptions);

	async function onDrop(acceptedFiles: Array<File>): Promise<void> {
		// Prepend uploaded file list with new upload items
		let newFileUploadList: Array<FileUploadListItem> = acceptedFiles.map((element: File) => {
			return {
				fileName: element.name,
				status: FileUploadStatus.PROCESSING,
			};
		}).concat(fileUploadList);
		setFileUploadList(newFileUploadList);

		// Loop through new upload items
		for (const index in acceptedFiles) {
			const file = acceptedFiles[index];
			const result: boolean = await fileUploadCallback(file);
			newFileUploadList = [...newFileUploadList];
			newFileUploadList[index].status = (result) ? FileUploadStatus.SUCCESS : FileUploadStatus.FAILED;
			setFileUploadList(newFileUploadList);
		}

		finishUploadCallback?.(newFileUploadList);
	}

	return (
		<React.Fragment>
			<div
				className={`react-media-library__file-upload ${(isDragActive) && "is-drag-active"}`}
				{...getRootProps()}
			>
				<input {...getInputProps()} />
				{isDragActive ?
					<p>Drop the files here ...</p> :
					<p>Drag 'n' drop some files here, or click to select files</p>
				}
			</div>
			{(fileUploadList.length > 0) && (
				<FileUploadResult fileUploadList={fileUploadList}/>
			)}
		</React.Fragment>
	)
};

export default FileUpload;
