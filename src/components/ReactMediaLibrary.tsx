import * as React from "react";
import {ReactMediaLibraryProps} from "../../types";
import Modal from "react-bootstrap/Modal";

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
				<p>
					Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
					commodi aspernatur enim, consectetur. Cumque deleniti temporibus
					ipsam atque a dolores quisquam quisquam adipisci possimus
					laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
					accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
					reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
					deleniti rem!
				</p>
			</Modal.Body>
		</Modal>
	);
};

ReactMediaLibrary.defaultProps = {
	modalTitle:"Media Library",
};

export default ReactMediaLibrary;


