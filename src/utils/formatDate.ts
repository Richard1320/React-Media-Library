export default function formatDate(date: Date | number | string): string {
	let newDate: Date;
	if (date instanceof Date) {
		newDate = date;
	} else {
		newDate = new Date(date);
	}

	return newDate.toLocaleDateString();
}
