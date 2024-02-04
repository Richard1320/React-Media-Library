import React, {ReactElement} from 'react';
import {FileLibraryPagerProps} from "../../../types";

const FileLibraryPager: React.FC<FileLibraryPagerProps> = ({
	count,
	itemsPerPage,
	offsetDisplay = 2,
	page,
	pagerCallback
}: FileLibraryPagerProps): ReactElement => {

	function renderLinks(): ReactElement[] {
		const links = [];
		const offset = (offsetDisplay !== undefined) ? offsetDisplay : 2;
		const totalPages = Math.ceil(count / itemsPerPage);
		const prevPage = page - 1;
		const nextPage = page + 1;

		links.push(
			<button
				className="react-media-library__file-library-pager__item is-first"
				key="first"
				onClick={() => pagerCallback(1)}
				disabled={page === 1}
			>
				&lt;&lt;
			</button>
		);
		links.push(
			<button
				className="react-media-library__file-library-pager__item is-prev"
				key="prev"
				onClick={() => pagerCallback(prevPage)}
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
						className={`react-media-library__file-library-pager__item ${(number === page) && "is-active"}`}
						key={number}
						onClick={() => pagerCallback(number)}
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
				onClick={() => pagerCallback(nextPage)}
				disabled={page === totalPages}
			>
				&gt;
			</button>
		);
		links.push(
			<button
				className="react-media-library__file-library-pager__item is-last"
				key="last"
				onClick={() => pagerCallback(totalPages)}
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

export default FileLibraryPager;
