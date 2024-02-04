/*! For license information please see components-FileLibraryCard-FileLibraryCard-stories.0bdd71fa.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_media_library=self.webpackChunkreact_media_library||[]).push([[253],{"./src/components/FileLibraryCard/FileLibraryCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _FileLibraryCard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/FileLibraryCard/FileLibraryCard.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_FileLibraryCard__WEBPACK_IMPORTED_MODULE_1__.Z,title:"React-Media-Library/FileLibraryCard",tags:["autodocs"]},Primary=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:"20rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FileLibraryCard__WEBPACK_IMPORTED_MODULE_1__.Z,{...args})});Primary.displayName="Primary",Primary.args={_id:"primary",title:"Primary Image",size:1575684,createdAt:new Date,thumbnailUrl:"https://loremflickr.com/640/360",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",fileName:"my-image.jpg"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'(args: FileLibraryListItem) => <div style={{\n  width: "20rem"\n}}>\n        <FileLibraryCard {...args} />\n    </div>',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/FileLibraryCard/FileLibraryCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>FileLibraryCard_FileLibraryCard});var react=__webpack_require__("./node_modules/react/index.js");function formatBytes(bytes,decimals=2){if(0===bytes)return"0 Bytes";const dm=decimals<0?0:decimals,i=Math.floor(Math.log(bytes)/Math.log(1024));return parseFloat((bytes/Math.pow(1024,i)).toFixed(dm))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][i]}function formatDate(date){let newDate;return newDate=date instanceof Date?date:new Date(date),newDate.toLocaleDateString()}var ReactMediaLibraryContext=__webpack_require__("./src/context/ReactMediaLibraryContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FileLibraryCard=props=>{const{selectedItems}=(0,react.useContext)(ReactMediaLibraryContext.s),isSelected=!!selectedItems?.find((element=>element._id===props._id));return(0,jsx_runtime.jsxs)("div",{className:`react-media-library__file-library-card ${isSelected&&"is-active"}`,children:[props.thumbnailUrl&&(0,jsx_runtime.jsx)("img",{className:"react-media-library__file-library-card__image",src:props.thumbnailUrl,alt:props.title}),props.title&&(0,jsx_runtime.jsx)("h4",{className:"react-media-library__file-library-card__title",children:props.title}),(0,jsx_runtime.jsxs)("ul",{className:"react-media-library__file-library-card__list",children:[props.fileName&&(0,jsx_runtime.jsx)("li",{className:"react-media-library__file-library-card__list__item",children:props.fileName}),props.size&&(0,jsx_runtime.jsx)("li",{className:"react-media-library__file-library-card__list__item",children:formatBytes(props.size)}),props.createdAt&&(0,jsx_runtime.jsx)("li",{className:"react-media-library__file-library-card__list__item",children:formatDate(props.createdAt)})]})]})};FileLibraryCard.displayName="FileLibraryCard";const FileLibraryCard_FileLibraryCard=FileLibraryCard;try{FileLibraryCard.displayName="FileLibraryCard",FileLibraryCard.__docgenInfo={description:"",displayName:"FileLibraryCard",props:{_id:{defaultValue:null,description:"Unique identifier for this item. Required to properly select the item in browse tab. *",name:"_id",required:!0,type:{name:"string | number"}},title:{defaultValue:null,description:"Displayed title. *",name:"title",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Size of file in Bytes. *",name:"size",required:!1,type:{name:"number"}},createdAt:{defaultValue:null,description:"Date that the file was created. *",name:"createdAt",required:!1,type:{name:"string | number | Date"}},thumbnailUrl:{defaultValue:null,description:"URL for thumbnail to display image in browse tab. *",name:"thumbnailUrl",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Displayed description on card in browse tab. *",name:"description",required:!1,type:{name:"string"}},fileName:{defaultValue:null,description:"Displayed filename on card in browse tab. *",name:"fileName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FileLibraryCard/FileLibraryCard.tsx#FileLibraryCard"]={docgenInfo:FileLibraryCard.__docgenInfo,name:"FileLibraryCard",path:"src/components/FileLibraryCard/FileLibraryCard.tsx#FileLibraryCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/context/ReactMediaLibraryContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>ReactMediaLibraryContext});const reactMediaLibraryDefaultContext={fileLibraryList:[],selectedItems:[],setSelectedItems:()=>{},fileUploadCallback:async()=>!1,filesSelectCallback:()=>{},sortProperty:"createdAt",sortAscending:!1,multiSelect:!1,defaultSelectedItemIds:[]},ReactMediaLibraryContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)(reactMediaLibraryDefaultContext)},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);