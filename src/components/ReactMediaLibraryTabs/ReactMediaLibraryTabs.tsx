import React, {ReactElement, useState} from "react";
import FileUpload from "../FileUpload/FileUpload";
import FileLibrary from "../FileLibrary/FileLibrary";

const ReactMediaLibraryTabs: React.FC = (): ReactElement => {
	const [currentTab, setCurrentTab] = useState<"upload" | "browse">("browse");

	return (
		<div className="react-media-library__tabs">
		<div className="react-media-library__tabs__header">
			<div className={`react-media-library__tabs__header__item ${(currentTab === "browse") && "is-active"}`}>
			<button
				type="button"
				onClick={() => setCurrentTab("browse")}
			>
				Browse Files
			</button>
		</div>
		<div className={`react-media-library__tabs__header__item ${(currentTab === "upload") && "is-active"}`}>
			<button
				type="button"
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


