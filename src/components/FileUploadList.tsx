import React, {ReactNode} from "react";
import {FileUploadListProps, FileUploadListItem} from "../../types";
import Badge from "react-bootstrap/Badge";

function renderBadge(status: number): ReactNode {
	switch (status) {
		case -1:
			return (<Badge variant="danger">Failed</Badge>);
		case 0:
			return (<Badge variant="secondary">Processing</Badge>);
		case 1:
			return (<Badge variant="success">Success</Badge>);
	}
	return;
}

const FileUploadList: React.FC<FileUploadListProps> = (props: FileUploadListProps): JSX.Element => {
	function renderList(): ReactNode[] {
		return props.fileUploadList.map((element: FileUploadListItem, index: number) => {
			return (<li key={index} className="list-group-item d-flex justify-content-between align-items-center">
				{element.fileName}
				{renderBadge(element.status)}
			</li>);
		});
	}

	return (
		<React.Fragment>
			{(props.fileUploadList.length > 0) && (<h3>Uploaded Files</h3>)}
			<ul className="list-groups p-0">
				{renderList()}
			</ul>
		</React.Fragment>
	);
};

export default FileUploadList;