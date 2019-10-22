import * as React from "react";
import {ReactMediaLibraryProps} from "../../types";
import Modal from "react-bootstrap/Modal";
import ReactMediaLibraryTabs from "./ReactMediaLibraryTabs";

const ReactMediaLibrary: React.FC<ReactMediaLibraryProps> = (props: ReactMediaLibraryProps): JSX.Element => {
	return (
		<Modal
			size="xl"
			show={props.show}
			onHide={props.onHide}
			id="react-media-library-modal"
			aria-labelledby="react-media-library-modal"
		>
			<Modal.Header closeButton>
				<Modal.Title>
					{props.modalTitle}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<ReactMediaLibraryTabs
					fileLibraryList={props.fileLibraryList}
					fileUploadCallback={props.fileUploadCallback}
					fileSelectCallback={props.fileSelectCallback}
					fileDeleteCallback={props.fileDeleteCallback}
					libraryCardComponent={props.libraryCardComponent}
				/>
			</Modal.Body>
		</Modal>
	);
};

ReactMediaLibrary.defaultProps = {
	modalTitle: "Media Library",
};

export default ReactMediaLibrary;


