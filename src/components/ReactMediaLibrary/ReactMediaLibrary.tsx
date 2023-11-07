import React, {MouseEvent, ReactElement} from "react";
import ReactMediaLibraryTabs from "../ReactMediaLibraryTabs/ReactMediaLibraryTabs";
import {ReactMediaLibraryProps} from "../../../types";
import {ReactMediaLibraryContext} from "../../context/ReactMediaLibraryContext";
import FileLibraryCard from "../FileLibraryCard/FileLibraryCard";

const ReactMediaLibrary: React.FC<ReactMediaLibraryProps> = (props: ReactMediaLibraryProps): ReactElement => {

	function handleModalOnClick(e: MouseEvent) {
		// Prevent event propagation on child elements
		if (e.currentTarget != e.target) return;
		props.onHide();
	}

	if (!props.show) {
		return <React.Fragment/>;
	}

	return (
		<ReactMediaLibraryContext.Provider
			value={{
				multiSelect: props.multiSelect,
				fileLibraryList: props.fileLibraryList,
				fileUploadCallback: props.fileUploadCallback,
				multiSelectCallback: (props.multiSelect) ? props.multiSelectCallback : () => {},
				multiDeleteCallback: (props.multiSelect) ? props.multiDeleteCallback : undefined,
				fileSelectCallback: (!props.multiSelect) ? props.fileSelectCallback : () => {},
				fileDeleteCallback: (!props.multiSelect) ? props.fileDeleteCallback : undefined,
				libraryCardComponent: props.libraryCardComponent,
				topBarComponent: props.topBarComponent,
				sortProperty: props.sortProperty,
				sortAscending: props.sortAscending,
			}}
		>
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
								<span className="icon-close"/>
							</button>
						</div>
					</div>
					<div className="react-media-library__modal__body">
						<ReactMediaLibraryTabs />
					</div>
				</div>
			</div>
		</ReactMediaLibraryContext.Provider>
	);
};

ReactMediaLibrary.defaultProps = {
	modalTitle: "Media Library",
	sortProperty: "createdAt",
	sortAscending: false,
	libraryCardComponent: (item, isSelected) => (<FileLibraryCard isSelected={isSelected} {...item} />),
};

export default ReactMediaLibrary;


