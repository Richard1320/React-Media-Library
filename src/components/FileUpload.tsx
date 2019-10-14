import React, {useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {FileMeta, FileUploadProps} from "../../types";
import {FileUploadListItem} from "../../types/components/FileUpload";
import FileUploadList from "./FileUploadList";

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

const FileUpload: React.FC<FileUploadProps> = (props: FileUploadProps): JSX.Element => {
	const [fileUploadList, setFileUploadList] = useState<FileUploadListItem[]>([]);

	function onDrop(acceptedFiles: File[]) {
		let newFileUploadList: FileUploadListItem[] = acceptedFiles.map((element: File) => {
			return {fileName: element.name, status: 0};
		}).concat(fileUploadList);
		setFileUploadList(newFileUploadList);

		// Loop through dropped files
		acceptedFiles.forEach((file: File, index: number) => {
			(async () => {
				const fileBase64 = await readFile(file);
				const fileMeta: FileMeta = {fileName: file.name, type: file.type, size: file.size};
				const result: boolean = await props.fileUploadCallback(fileBase64, fileMeta);
				newFileUploadList = [...newFileUploadList];
				newFileUploadList[index].status = (result) ? 1 : -1;
				setFileUploadList(newFileUploadList);
			})();
		});
	}
	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
	return (
		<React.Fragment>
			<div
				className={`p-5 text-center alert alert-${isDragActive ? "success" : "secondary"}`}
				{...getRootProps()}
			>
				<input {...getInputProps()} />
				{isDragActive ?
					<p className="m-0">Drop the files here ...</p> :
					<p className="m-0">Drag 'n' drop some files here, or click to select files</p>
				}
			</div>
			<FileUploadList fileUploadList={fileUploadList}/>
		</React.Fragment>
	)
};

export default FileUpload;