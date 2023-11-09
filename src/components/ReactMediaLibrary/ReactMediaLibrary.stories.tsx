import {Meta} from "@storybook/react";
import ReactMediaLibrary from "./ReactMediaLibrary";
import {Primary as PrimaryComponent} from "./examples/Primary";
import {MultiSelect as MultiSelectComponent} from "./examples/MultiSelect";
import {CustomCard as CustomCardComponent} from "./examples/CustomCard";
import {SearchBar as SearchBarComponent} from "./examples/SearchBar";
import {CustomSelectedForm as CustomSelectedFormComponent} from "./examples/CustomSelectedForm";
import {Empty as EmptyComponent} from "./examples/Empty";

const meta: Meta<typeof ReactMediaLibrary> = {
	component: ReactMediaLibrary,
	title: "React-Media-Library/ReactMediaLibrary",
	tags: ["autodocs"],
	parameters: {
		docs: {
			story: {
				height: '700px',
			},
		},
	},
};
export default meta;

/**
 * Primary use with a button that opens the media library modal, and clicking off the modal will close it.
 * It has a default random item selected. Selecting a new item using the modal will update the item in the main component.
 */
export const Primary = PrimaryComponent;
/**
 * This will allow the user to select multiple items to submit or delete.
 */
export const MultiSelect = MultiSelectComponent;
/**
 * This has a custom component render for the main browse tab card.
 */
export const CustomCard = CustomCardComponent;
/**
 * This has a custom component at the top of the page. It is usually used for search and / or filter controls.
 * The logic will have to be done outside of `<ReactMediaLibrary>` but you can update the items being passed to the `fileLibraryList` prop.
 */
export const SearchBar = SearchBarComponent;
/**
 * This allows you to have a custom sidebar for selected items.
 * You can provide different information than the browse tab or even have an edit form.
 */
export const CustomSelectedForm = CustomSelectedFormComponent;
/**
 * This is the view if the list of files is empty.
 */
export const Empty = EmptyComponent;
