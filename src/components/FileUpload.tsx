import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {FileMeta, FileUploadProps} from "../../types";
import {FileListItem} from "../../types/components/FileUpload";
import FileUploadList from "./FileUploadList";

function readFile(file: File): Promise<string | ArrayBuffer | null> {
	const fileReader = new FileReader();

	return new Promise((resolve, reject) => {
		fileReader.onerror = () => {
			fileReader.abort();
			reject(new DOMException("Problem parsing input file."));
		};

		fileReader.onload = () => {
			resolve(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	});
}

const FileUpload: React.FC<FileUploadProps> = (props: FileUploadProps): JSX.Element => {
	const [fileList, setFileList] = useState<FileListItem[]>([]);
	const onDrop = useCallback((acceptedFiles: File[]) => {
		let newFileList: FileListItem[] = acceptedFiles.map((element: File) => {
			return {name: element.name, status: 0};
		});
		setFileList(newFileList);

		// Loop through dropped files
		acceptedFiles.forEach(async (file: File, index: number) => {
			(async () => {
				const fileBase64 = await readFile(file);
				const fileMeta: FileMeta = {fileName: file.name, type: file.type, size: file.size};
				const result: boolean = await props.fileUploadCallback(fileBase64, fileMeta);
				newFileList = [...newFileList];
				newFileList[index].status = (result) ? 1 : -1;
				setFileList(newFileList);
			})();
		});
	}, []);
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
			<FileUploadList fileList={fileList}/>
		</React.Fragment>
	)
};

export default FileUpload;