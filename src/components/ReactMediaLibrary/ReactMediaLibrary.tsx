import React, {MouseEvent, ReactElement, useEffect, useState} from "react";
import ReactMediaLibraryTabs from "../ReactMediaLibraryTabs/ReactMediaLibraryTabs";
import {FileLibraryListItem, ReactMediaLibraryProps} from "../../../types";
import {ReactMediaLibraryContext} from "../../context/ReactMediaLibraryContext";
import FileLibraryCard from "../FileLibraryCard/FileLibraryCard";
import {FileLibrarySelectedItems} from "../FileLibrarySelectedItems";

const ReactMediaLibrary: React.FC<ReactMediaLibraryProps> = (props: ReactMediaLibraryProps): ReactElement => {
	const [selectedItems, setSelectedItems] = useState<Array<FileLibraryListItem>>([]);

	useEffect(() => {
		// Asset loads are sometimes async.
		// Need to check the default and reselect if either the file library list or default select list is updated.
		if (props.defaultSelectedItemIds?.length) {
			const filterDefaultSelected = props.fileLibraryList.filter((item) => props.defaultSelectedItemIds?.includes(item._id));
			setSelectedItems(filterDefaultSelected);
		}
	}, [props.fileLibraryList, props.defaultSelectedItemIds]);

	function handleModalOnClick(e: MouseEvent) {
		// Prevent event propagation on child elements
		if (e.currentTarget != e.target) return;
		props.onClose();
	}

	if (!props.isOpen) {
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
				finishUploadCallback: props.finishUploadCallback,
				filesSelectCallback: props.filesSelectCallback,
				filesDeleteCallback: props.filesDeleteCallback,
				libraryCardComponent: props.libraryCardComponent,
				selectedItemsComponent: props.selectedItemsComponent,
				topBarComponent: props.topBarComponent,
				sortProperty: props.sortProperty,
				sortAscending: props.sortAscending,
				acceptedTypes: props.acceptedTypes,
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
								onClick={props.onClose}
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
	isOpen: false,
	multiSelect: false,
	fileLibraryList: [],
	libraryCardComponent: (item) => (<FileLibraryCard {...item} />),
	selectedItemsComponent: () => (<FileLibrarySelectedItems/>),
	acceptedTypes: ["image/*"],
};

export default ReactMediaLibrary;


