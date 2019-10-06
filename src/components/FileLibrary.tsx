import React, {ReactNode, useState} from "react";
import {FileLibraryListItem, FileLibraryProps} from "../../types";
import Col from "react-bootstrap/Col";
import FileLibraryCard from "./FileLibraryCard";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const FileLibrary: React.FC<FileLibraryProps> = (props: FileLibraryProps): JSX.Element => {

	const [selectedItem, setSelectedItem] = useState<FileLibraryListItem | undefined>(undefined);

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
				<FileLibraryCard
					cardClickCallback={(item: FileLibraryListItem) => setSelectedItem(item)}
					{...element}
				/>
			</Col>);
		});
	}

	const submitRow: ReactNode = (selectedItem && (
		<Row>
			<Col>
				<Button
					variant="primary"
					className="text-right"
					onClick={() => props.fileSelectCallback(selectedItem as FileLibraryListItem)}
				>
					Submit
				</Button>
			</Col>
		</Row>
	));

	return (
		<React.Fragment>
			<Row className="py-3">
				{renderList()}
			</Row>
			{submitRow}
		</React.Fragment>
	);
};

FileLibrary.defaultProps = {
	sortProperty: "createdAt",
	sortAscending: false,
};

export default FileLibrary;