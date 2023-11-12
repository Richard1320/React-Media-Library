import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";

import FileLibraryCard from "./FileLibraryCard";

describe("Running Test for FileLibraryCard", () => {
	test("Check title is displaying", () => {
		render(
			<FileLibraryCard
				_id={"primary"}
				title={"My custom title"}
				size={1575684}
				createdAt={new Date()}
				thumbnailUrl={"https://loremflickr.com/640/360"}
				description={"This is what a selectable card will look like."}
				fileName={"my-favorite-image.jpg"}
			/>
		);
		expect(screen.getByText("My custom title")).toBeInTheDocument();
	});
});
