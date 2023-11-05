import React, {ReactElement, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import FileUploadResult, {FileUploadStatus} from "../FileUploadResult/FileUploadResult";
import {FileMeta, FileUploadListItem, FileUploadProps} from "../../../types";

function readFile(file: File): Promise<string> {
	const fileReader = new FileReader();

	return new Promise((resolve, reject) => {
		fileReader.onerror = () => {
			fileReader.abort();
			reject(new DOMException("Problem parsing input file."));
		};

		fileReader.onload = () => {
			resolve(fileReader.result as string);
		};
		fileReader.readAsDataURL(file);
	});
}

const FileUpload: React.FC<FileUploadProps> = (props: FileUploadProps): ReactElement => {
	const [fileUploadList, setFileUploadList] = useState<FileUploadListItem[]>([]);
	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

	function onDrop(acceptedFiles: File[]) {
		let newFileUploadList: FileUploadListItem[] = acceptedFiles.map((element: File) => {
			return {fileName: element.name, status: FileUploadStatus.PROCESSING};
		}).concat(fileUploadList);
		setFileUploadList(newFileUploadList);

		// Loop through dropped files
		acceptedFiles.forEach((file: File, index: number) => {
			(async () => {
				const fileBase64 = await readFile(file);
				const fileMeta: FileMeta = {fileName: file.name, type: file.type, size: file.size};
				const result: boolean = await props.fileUploadCallback(fileBase64, fileMeta);
				newFileUploadList = [...newFileUploadList];
				newFileUploadList[index].status = (result) ? FileUploadStatus.SUCCESS : FileUploadStatus.FAILED;
				setFileUploadList(newFileUploadList);
			})();
		});
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
