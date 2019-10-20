import React from "react";
import {FileLibraryListItem} from "../../types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import formatBytes from "../utils/formatBytes";
import formatDate from "../utils/formatDate";

const imgStyle: React.CSSProperties = {
	width: "100%",
	height: "150px",
	objectFit: "cover",
	objectPosition: "50% 50%",
};

interface IProps extends FileLibraryListItem {
	selectedItem: FileLibraryListItem | undefined;
}

const FileLibraryCard: React.FC<IProps> = (props: IProps): JSX.Element => {

	return (
		<Card
			bg={(props.selectedItem !== undefined && props.selectedItem._id === props._id) ? "primary" : undefined}
		>
			{(props.thumbnailUrl) && (
				<Card.Img variant="top" src={props.thumbnailUrl} style={imgStyle}/>
			)}
			{(props.title || props.description) && (
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>{props.description}</Card.Text>
				</Card.Body>
			)}
			<ListGroup className="list-group-flush small">
				{(props.fileName) && (<ListGroupItem>{props.fileName}</ListGroupItem>)}
				{(props.size) && (<ListGroupItem>{formatBytes(props.size)}</ListGroupItem>)}
				{(props.createdAt) && (<ListGroupItem>{formatDate(props.createdAt)}</ListGroupItem>)}
			</ListGroup>
		</Card>
	);
};

export default FileLibraryCard;