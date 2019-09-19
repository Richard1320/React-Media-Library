import * as React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const ReactMediaLibraryTabs: React.FC = (): JSX.Element => {

	return (
		<Tabs defaultActiveKey="upload" id="react-media-library-tabs">
			<Tab eventKey="upload" title="Upload">
				<h1>Upload</h1>
			</Tab>
			<Tab eventKey="library" title="Library">
				<h1>Library</h1>
			</Tab>
		</Tabs>
	);
};

export default ReactMediaLibraryTabs;


