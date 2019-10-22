import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import formatBytes from "../utils/formatBytes";
import formatDate from "../utils/formatDate";
const imgStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    objectPosition: "50% 50%",
};
const FileLibraryCard = (props) => {
    return (React.createElement(Card, { bg: (props.selectedItem !== undefined && props.selectedItem._id === props._id) ? "primary" : undefined },
        (props.thumbnailUrl) && (React.createElement(Card.Img, { variant: "top", src: props.thumbnailUrl, style: imgStyle })),
        (props.title || props.description) && (React.createElement(Card.Body, null,
            React.createElement(Card.Title, null, props.title),
            React.createElement(Card.Text, null, props.description))),
        React.createElement(ListGroup, { className: "list-group-flush small" },
            (props.fileName) && (React.createElement(ListGroupItem, null, props.fileName)),
            (props.size) && (React.createElement(ListGroupItem, null, formatBytes(props.size))),
            (props.createdAt) && (React.createElement(ListGroupItem, null, formatDate(props.createdAt))))));
};
export default FileLibraryCard;
//# sourceMappingURL=FileLibraryCard.js.map