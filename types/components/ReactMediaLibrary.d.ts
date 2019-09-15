import * as React from 'react';

export interface ReactMediaLibraryProps {
	show?:boolean;
	onHide?: any;
	onShow?: any;
	dialogClassName?: string;
	modalTitle?: string;
}
export const ReactMediaLibrary: React.FC<ReactMediaLibraryProps>;
