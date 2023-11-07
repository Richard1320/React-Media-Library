import React, {ReactElement, useContext, useState} from "react";
import FileUpload from "../FileUpload/FileUpload";
import FileLibrary from "../FileLibrary/FileLibrary";
import {ReactMediaLibraryContext} from "../../context/ReactMediaLibraryContext";

const ReactMediaLibraryTabs: React.FC = (): ReactElement => {
	const {fileLibraryList} = useContext(ReactMediaLibraryContext);
	const [currentTab, setCurrentTab] = useState<"upload"|"browse">((fileLibraryList?.length > 0) ? "browse": "upload");

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
					<FileLibrary />
				</div>
			) : (
				<div className="react-media-library__tabs__item">
					<div>
						<FileUpload />
					</div>
				</div>
			)}
		</div>
	);
};

export default ReactMediaLibraryTabs;


