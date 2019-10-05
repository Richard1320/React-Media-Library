import React, {ReactNode} from "react";
import {FileLibraryListItem, FileLibraryProps} from "../../types";
import Col from "react-bootstrap/Col";
import FileLibraryCard from "./FileLibraryCard";
import Row from "react-bootstrap/Row";

const FileLibrary: React.FC<FileLibraryProps> = (props: FileLibraryProps): JSX.Element => {

	function sortArray(a: FileLibraryListItem, b: FileLibraryListItem): -1 | 0 | 1 {
		try {
			const property = props.sortProperty;
			let valA: any = property !== undefined ? a[property] : 0;
			let valB: any = property !== undefined ? b[property] : 0;

			// If string, ignore upper and lowercase
			if (typeof valA === "string") valA = valA.toUpperCase();
			if (typeof valB === "string") valB = valB.toUpperCase();

			if (props.sortAscending) {
				return (valA < valB) ? -1 : 1;
			} else {
				return (valA > valB) ? -1 : 1;
			}
		} catch {
			return 0;
		}
	}

	function renderList(): ReactNode[] {
		if (!props.fileLibraryList) return [];

		return props.fileLibraryList.sort(sortArray).map((element: FileLibraryListItem, index: number) => {
			return (<Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
				<FileLibraryCard {...element} />
			</Col>);
		});
	}

	return (
		<React.Fragment>
			<Row className="py-3">
				{renderList()}
			</Row>
		</React.Fragment>
	);
};

FileLibrary.defaultProps = {
	sortProperty: "createdAt",
	sortAscending: false,
};

export default FileLibrary;