import React, {MouseEvent, ReactElement} from "react";
import ReactMediaLibraryTabs from "../ReactMediaLibraryTabs/ReactMediaLibraryTabs";
import {ReactMediaLibraryProps} from "../../../types";

const ReactMediaLibrary: React.FC<ReactMediaLibraryProps> = (props: ReactMediaLibraryProps): ReactElement => {

	function handleModalOnClick(e: MouseEvent) {
		// Prevent event propagation on child elements
		if (e.currentTarget != e.target) return;
		props.onHide();
	}

	if (!props.show) {
		return <React.Fragment />;
	}

	return (
		<div
			className="react-media-library"
			onClick={handleModalOnClick}
		>
			<div className="react-media-library__modal">
				<div className="react-media-library__modal__header">
					<h2 className="react-media-library__modal__header__title">
						{props.modalTitle}
					</h2>
					<div className="react-media-library__modal__header__close">
						<button
							onClick={props.onHide}
						>
							<span className="icon-close" />
						</button>
					</div>
				</div>
				<div className="react-media-library__modal__body">
					<ReactMediaLibraryTabs
						multiSelect={props.multiSelect}
						fileLibraryList={props.fileLibraryList}
						fileUploadCallback={props.fileUploadCallback}
						multiSelectCallback={(props.multiSelect) ? props.multiSelectCallback : () => {}}
						multiDeleteCallback={(props.multiSelect) ? props.multiDeleteCallback : undefined}
						fileSelectCallback={(!props.multiSelect) ? props.fileSelectCallback : () => {}}
						fileDeleteCallback={(!props.multiSelect) ? props.fileDeleteCallback : undefined}
						libraryCardComponent={props.libraryCardComponent}
					/>
				</div>
			</div>
		</div>
	);
};

ReactMediaLibrary.defaultProps = {
	modalTitle: "Media Library",
};

export default ReactMediaLibrary;


