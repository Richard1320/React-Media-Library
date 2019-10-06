import React, {ReactNode, useState} from "react";
import {FileLibraryListItem, FileLibraryPagerProps, FileLibraryProps} from "../../types";
import Col from "react-bootstrap/Col";
import FileLibraryCard from "./FileLibraryCard";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import FileLibraryPager from "./FileLibraryPager";

interface IProps extends FileLibraryProps, FileLibraryPagerProps {
}

const FileLibrary: React.FC<IProps> = (props: IProps): JSX.Element => {

	const [selectedItem, setSelectedItem] = useState<FileLibraryListItem | undefined>(undefined);
	const [page, setPage] = useState<number>(1);
	const itemsPerPage = 12;

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

		const arrayStart = (page - 1) * itemsPerPage;
		let arrayEnd = arrayStart + itemsPerPage;
		if (arrayEnd > props.fileLibraryList.length) {
			// If calculated end extends past length of actual array
			// Set calculated end as length of array
			arrayEnd = props.fileLibraryList.length;
		}

		return props.fileLibraryList
			.sort(sortArray)
			.slice(arrayStart, arrayEnd)
			.map((element: FileLibraryListItem, index: number) => {
				return (<Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
					<FileLibraryCard
						cardClickCallback={(item: FileLibraryListItem) => setSelectedItem(item)}
						selectedItem={selectedItem}
						{...element}
					/>
				</Col>);
			});
	}

	const submitRow: ReactNode = (selectedItem && (
		<Row>
			<Col className="text-right">
				<Button
					variant="primary"
					onClick={() => props.fileSelectCallback(selectedItem as FileLibraryListItem)}
				>
					Submit
				</Button>
			</Col>
		</Row>
	));

	const pagerRow: ReactNode = ((props.fileLibraryList.length > itemsPerPage) && (
		<Row>
			<Col className="d-flex justify-content-center">
				<FileLibraryPager
					count={props.fileLibraryList.length}
					page={page}
					pagerCallback={(number: number) => setPage(number)}
					itemsPerPage={itemsPerPage}
				/>
			</Col>
		</Row>
	));

	return (
		<React.Fragment>
			<Row className="py-3">
				{renderList()}
			</Row>
			{pagerRow}
			{submitRow}
		</React.Fragment>
	);
};

FileLibrary.defaultProps = {
	sortProperty: "createdAt",
	sortAscending: false,
};

export default FileLibrary;