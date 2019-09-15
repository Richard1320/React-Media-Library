import * as React from "react";
import {ReactMediaLibraryProps} from "../../types";

const ReactMediaLibrary: React.FC<ReactMediaLibraryProps> = (props: ReactMediaLibraryProps): JSX.Element => {

	return (
		<h1>{props.modalTitle}</h1>
	);
};

ReactMediaLibrary.defaultProps = {
	show:true,
	dialogClassName: "modal-90w",
	modalTitle:"Media Library",
};

export default ReactMediaLibrary;


