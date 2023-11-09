import {Meta} from "@storybook/react";
import ReactMediaLibrary from "./ReactMediaLibrary";

const meta: Meta<typeof ReactMediaLibrary> = {
	component: ReactMediaLibrary,
	title: "React-Media-Library/ReactMediaLibrary",
	argTypes: {},
};
export default meta;

export {Standard} from "./examples/Standard";
export {Empty} from "./examples/Empty";
export {MultiSelect} from "./examples/MultiSelect";
export {CustomCard} from "./examples/CustomCard";
export {SearchBar} from "./examples/SearchBar";
export {CustomSelectedForm} from "./examples/CustomSelectedForm";
