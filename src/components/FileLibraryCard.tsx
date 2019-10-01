import React from "react";
import {FileLibraryListItem} from "../../types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const imgStyle: React.CSSProperties = {
	width: "100%",
	height: "150px",
	objectFit: "cover",
	objectPosition: "50% 50%",
};

const FileLibraryCard: React.FC<FileLibraryListItem> = (props: FileLibraryListItem): JSX.Element => {
	return (
		<Card>
			<Card.Img variant="top" src={props.url} style={imgStyle}/>
			{(props.title || props.description) && (
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>{props.description}</Card.Text>
				</Card.Body>
			)}
			<ListGroup className="list-group-flush">
				<ListGroupItem>Filename: {props.fileName}</ListGroupItem>
			</ListGroup>
		</Card>
	);
};

export default FileLibraryCard;