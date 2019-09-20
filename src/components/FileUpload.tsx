import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

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

const FileUpload: React.FC = (): JSX.Element => {
	const onDrop = useCallback( (acceptedFiles: Blob[]) => {
		// Do something with the files

		acceptedFiles.forEach(async(file: Blob) => {
			try {
				const fileBase64 = await readFile(file);
				console.log("file base 64",fileBase64);
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