export function setup_time() {
	const time_element = document.getElementById('time');
	const state_element = document.getElementById('state');

	if (!state_element || !time_element) return;

	const update = () => {
		// now in melbourne
		const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Australia/Melbourne' }));

		let hours = now.getHours();
		const minutes = now.getMinutes();

		// AM or PM
		const meridian = hours > 12 ? 'PM' : 'AM';

		// sleeping till 9, working till 5
		const state = hours < 9 ? 'sleeping' : hours < 17 ? 'working' : 'awake';

		// convert to 12 hour time
		if (hours > 12) hours -= 12;

		// pad minutes with 0
		const minutes_string = String(minutes).padStart(2, '0');

		state_element.textContent = `${state}`;
		time_element.textContent = `${hours}:${minutes_string} ${meridian}`;
	};

	update();
	setInterval(update, 1000 * 10);
}
