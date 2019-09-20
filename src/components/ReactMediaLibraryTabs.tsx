import * as React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import FileUpload from "./FileUpload";

const ReactMediaLibraryTabs: React.FC = (): JSX.Element => {

	return (
		<Tabs defaultActiveKey="upload" id="react-media-library-tabs">
			<Tab eventKey="upload" title="Upload">
				<div className="pt-3">
					<FileUpload/>
				</div>
			</Tab>
			<Tab eventKey="library" title="Library">
				<h1>Library</h1>
			</Tab>
		</Tabs>
	);
};

export default ReactMediaLibraryTabs;


