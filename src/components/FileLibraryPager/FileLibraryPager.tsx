import React, {ReactElement} from 'react';
import {FileLibraryPagerProps} from "../../../types";

const FileLibraryPager: React.FC<FileLibraryPagerProps> = (props: FileLibraryPagerProps): ReactElement => {

	function renderLinks(): ReactElement[] {
		const links = [];
		const count = props.count;
		const page = props.page;
		const itemsPerPage = props.itemsPerPage;
		const offset = (props.offsetDisplay !== undefined) ? props.offsetDisplay : 2;
		const totalPages = Math.ceil(count / itemsPerPage);
		const prevPage = page - 1;
		const nextPage = page + 1;

		links.push(
			<button
				className="react-media-library__file-library-pager__item is-first"
				key="first"
				onClick={() => props.pagerCallback(1)}
				disabled={page === 1}
			>
				&lt;&lt;
			</button>
		);
		links.push(
			<button
				className="react-media-library__file-library-pager__item is-prev"
				key="prev"
				onClick={() => props.pagerCallback(prevPage)}
				disabled={page === 1}
			>
				&lt;
			</button>
		);

		// loop to show links to range of pages around current page
		for (let number = page - offset; number < page + offset + 1; number++) {
			// if it's a valid page number...
			if (number > 0 && number <= totalPages) {
				links.push(
					<button
						className={`react-media-library__file-library-pager__item ${(number === props.page) && "is-active"}`}
						key={number}
						onClick={() => props.pagerCallback(number)}
					>
						{number}
					</button>
				);
			}
		}

		links.push(
			<button
				className="react-media-library__file-library-pager__item is-next"
				key="next"
				onClick={() => props.pagerCallback(nextPage)}
				disabled={page === totalPages}
			>
				&gt;
			</button>
		);
		links.push(
			<button
				className="react-media-library__file-library-pager__item is-last"
				key="last"
				onClick={() => props.pagerCallback(totalPages)}
				disabled={page === totalPages}
			>
				&gt;&gt;
			</button>
		);

		return links;
	}

	return (
		<div className="react-media-library__file-library-pager">
			{renderLinks()}
		</div>
	);

};

FileLibraryPager.defaultProps = {
	offsetDisplay: 2,
};

export default FileLibraryPager;
