export function setup_age() {
	const element = document.getElementById('age');

	if (!element) return;

	// april 20, 2005
	const birthday = new Date(Date.UTC(2005, 3, 20));

	// now in melbourne
	const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Australia/Melbourne' }));

	// same year but before birthday
	const offset =
		now.getMonth() < birthday.getMonth() ||
		(now.getMonth() === birthday.getMonth() && now.getDate() < birthday.getDate());

	// coerces offset to 1 or 0
	const age = now.getFullYear() - birthday.getFullYear() - Number(offset);

	element.textContent = `${age}`;
}
