import * as React from 'react';

export interface ReactMediaLibraryProps {
	show:boolean;
	onHide: () => void;
	modalTitle?: string;
}
export const ReactMediaLibrary: React.FC<ReactMediaLibraryProps>;
