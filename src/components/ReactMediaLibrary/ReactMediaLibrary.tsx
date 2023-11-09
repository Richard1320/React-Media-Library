import React, {MouseEvent, ReactElement, useState} from "react";
import ReactMediaLibraryTabs from "../ReactMediaLibraryTabs/ReactMediaLibraryTabs";
import {FileLibraryListItem, ReactMediaLibraryProps} from "../../../types";
import {ReactMediaLibraryContext} from "../../context/ReactMediaLibraryContext";
import FileLibraryCard from "../FileLibraryCard/FileLibraryCard";
import {FileLibrarySelectedItems} from "../FileLibrarySelectedItems";

const ReactMediaLibrary: React.FC<ReactMediaLibraryProps> = (props: ReactMediaLibraryProps): ReactElement => {

	const [selectedItems, setSelectedItems] = useState<Array<FileLibraryListItem>>([]);

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
				selectedItems: selectedItems,
				setSelectedItems: setSelectedItems,
				multiSelect: props.multiSelect,
				fileLibraryList: props.fileLibraryList,
				fileUploadCallback: props.fileUploadCallback,
				multiSelectCallback: (props.multiSelect) ? props.multiSelectCallback : () => {},
				multiDeleteCallback: (props.multiSelect) ? props.multiDeleteCallback : undefined,
				fileSelectCallback: (!props.multiSelect) ? props.fileSelectCallback : () => {},
				fileDeleteCallback: (!props.multiSelect) ? props.fileDeleteCallback : undefined,
				libraryCardComponent: props.libraryCardComponent,
				selectedItemsComponent: props.selectedItemsComponent,
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
	libraryCardComponent: (item) => (<FileLibraryCard {...item} />),
	selectedItemsComponent: () => (<FileLibrarySelectedItems/>),
};

export default ReactMediaLibrary;


