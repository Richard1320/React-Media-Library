import * as React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import FileUpload from "./FileUpload";
import FileLibrary from "./FileLibrary";
const ReactMediaLibraryTabs = (props) => {
    return (React.createElement(Tabs, { defaultActiveKey: "upload", id: "react-media-library-tabs" },
        React.createElement(Tab, { eventKey: "upload", title: "Upload" },
            React.createElement("div", { className: "pt-3" },
                React.createElement(FileUpload, { fileUploadCallback: props.fileUploadCallback }))),
        (Array.isArray(props.fileLibraryList) && props.fileLibraryList.length > 0) && (React.createElement(Tab, { eventKey: "library", title: "Library" },
            React.createElement(FileLibrary, { fileLibraryList: props.fileLibraryList, fileSelectCallback: props.fileSelectCallback, fileDeleteCallback: props.fileDeleteCallback, libraryCardComponent: props.libraryCardComponent })))));
};
export default ReactMediaLibraryTabs;
//# sourceMappingURL=ReactMediaLibraryTabs.js.map