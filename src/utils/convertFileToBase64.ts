export default function convertFileToBase64(file: File): Promise<string> {
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
