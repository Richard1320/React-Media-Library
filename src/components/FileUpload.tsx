import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

function readFile(file: Blob) {
	const reader = new FileReader();

	reader.onabort = () => console.log('file reading was aborted');
	reader.onerror = () => console.log('file reading has failed');
	reader.onload = () => {
		// Do whatever you want with the file contents
		const binaryStr = reader.result;
		console.log(binaryStr)
	};

	reader.readAsBinaryString(file);
}

const FileUpload: React.FC = (): JSX.Element => {
	const onDrop = useCallback(acceptedFiles => {
		// Do something with the files

		acceptedFiles.forEach((file: Blob) => {
			try {
				readFile(file);
			} catch (err) {
				console.log("React Media Library FileReader error",err);
			}
		});
	}, []);
	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ?
				<p>Drop the files here ...</p> :
				<p>Drag 'n' drop some files here, or click to select files</p>
			}
		</div>
	)
};

export default FileUpload;