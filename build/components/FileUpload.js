var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import FileUploadList from "./FileUploadList";
function readFile(file) {
    const fileReader = new FileReader();
    return new Promise((resolve, reject) => {
        fileReader.onerror = () => {
            fileReader.abort();
            reject(new DOMException("Problem parsing input file."));
        };
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    });
}
const FileUpload = (props) => {
    const [fileUploadList, setFileUploadList] = useState([]);
    function onDrop(acceptedFiles) {
        let newFileUploadList = acceptedFiles.map((element) => {
            return { fileName: element.name, status: 0 };
        }).concat(fileUploadList);
        setFileUploadList(newFileUploadList);
        // Loop through dropped files
        acceptedFiles.forEach((file, index) => {
            (() => __awaiter(this, void 0, void 0, function* () {
                const fileBase64 = yield readFile(file);
                const fileMeta = { fileName: file.name, type: file.type, size: file.size };
                const result = yield props.fileUploadCallback(fileBase64, fileMeta);
                newFileUploadList = [...newFileUploadList];
                newFileUploadList[index].status = (result) ? 1 : -1;
                setFileUploadList(newFileUploadList);
            }))();
        });
    }
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", Object.assign({ className: `p-5 text-center alert alert-${isDragActive ? "success" : "secondary"}` }, getRootProps()),
            React.createElement("input", Object.assign({}, getInputProps())),
            isDragActive ?
                React.createElement("p", { className: "m-0" }, "Drop the files here ...") :
                React.createElement("p", { className: "m-0" }, "Drag 'n' drop some files here, or click to select files")),
        React.createElement(FileUploadList, { fileUploadList: fileUploadList })));
};
export default FileUpload;
//# sourceMappingURL=FileUpload.js.map