import * as React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import FileUpload from "./FileUpload";
import {ReactMediaLibraryTabsProps} from "../../types";
import FileLibrary from "./FileLibrary";

const ReactMediaLibraryTabs: React.FC<ReactMediaLibraryTabsProps> = (props: ReactMediaLibraryTabsProps): JSX.Element => {
	return (
		<Tabs defaultActiveKey="upload" id="react-media-library-tabs">
			<Tab eventKey="upload" title="Upload">
				<div className="pt-3">
					<FileUpload
						fileUploadCallback={props.fileUploadCallback}
					/>
				</div>
			</Tab>
			{(Array.isArray(props.fileLibraryList) && props.fileLibraryList.length > 0) && (
				<Tab eventKey="library" title="Library">
					<FileLibrary
						fileLibraryList={props.fileLibraryList}
						fileSelectCallback={props.fileSelectCallback}
						fileDeleteCallback={props.fileDeleteCallback}
						libraryCardComponent={props.libraryCardComponent}
					/>
				</Tab>
			)}
		</Tabs>
	);
};

export default ReactMediaLibraryTabs;


