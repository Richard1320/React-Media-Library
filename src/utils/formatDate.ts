export default function formatDate(date: Date): string {

	const options = {year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"};

	return date.toLocaleDateString("en-US", options);
}