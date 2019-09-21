import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import {FileUploadProps} from "../../types";

function readFile(file: Blob): Promise<string | ArrayBuffer | null> {
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
	const onDrop = useCallback((acceptedFiles: Blob[]) => {
		// Do something with the files

		acceptedFiles.forEach(async (file: Blob) => {
			const fileBase64 = await readFile(file);
			// console.log("file base 64", fileBase64);
			props.fileUploadCallback(fileBase64);
		});
	}, []);
	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

	return (
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
	)
};

export default FileUpload;