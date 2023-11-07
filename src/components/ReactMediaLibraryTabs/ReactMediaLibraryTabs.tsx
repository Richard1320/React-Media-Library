import React, {ReactElement, useState} from "react";
import FileUpload from "../FileUpload/FileUpload";
import FileLibrary from "../FileLibrary/FileLibrary";
import {ReactMediaLibraryTabsProps} from "../../../types";

const ReactMediaLibraryTabs: React.FC<ReactMediaLibraryTabsProps> = (props: ReactMediaLibraryTabsProps): ReactElement => {
	const [currentTab, setCurrentTab] = useState<"upload"|"browse">((props.fileLibraryList?.length > 0) ? "browse": "upload");

	return (
		<div className="react-media-library__tabs">
		<div className="react-media-library__tabs__header">
			<div className={`react-media-library__tabs__header__item ${(currentTab === "browse") && "is-active"}`}>
			<button
				onClick={() => setCurrentTab("browse")}
			>
				Browse Files
			</button>
		</div>
		<div className={`react-media-library__tabs__header__item ${(currentTab === "upload") && "is-active"}`}>
			<button
				onClick={() => setCurrentTab("upload")}
			>
				Upload File
			</button>
		</div>
		</div>
			{(currentTab === "browse") ? (
				<div className="react-media-library__tabs__item">
					<FileLibrary
						multiSelect={props.multiSelect}
						fileLibraryList={props.fileLibraryList}
						multiSelectCallback={(props.multiSelect) ? props.multiSelectCallback : () => {}}
						multiDeleteCallback={(props.multiSelect) ? props.multiDeleteCallback : undefined}
						fileSelectCallback={(!props.multiSelect) ? props.fileSelectCallback : () => {}}
						fileDeleteCallback={(!props.multiSelect) ? props.fileDeleteCallback : undefined}
						libraryCardComponent={props.libraryCardComponent}
						topBarComponent={props.topBarComponent}
					/>
				</div>
			) : (
				<div className="react-media-library__tabs__item">
					<div>
						<FileUpload
							fileUploadCallback={props.fileUploadCallback}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default ReactMediaLibraryTabs;


