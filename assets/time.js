export function setup_time() {
	const time_element = document.getElementById('time');
	const state_element = document.getElementById('state');

	if (!state_element || !time_element) return;

	const update = () => {
		const now = new Date(new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' }));

		const hour = now.getHours();
		const minutes = now.getMinutes();

		const time = `${hour <= 12 ? hour : hour - 12}:${minutes < 10 ? '0' + minutes : minutes}`;
		const meridian = hour >= 12 ? 'PM' : 'AM';

		const state = hour < 9 ? 'sleeping' : hour < 17 ? 'working' : 'awake';

		state_element.textContent = `${state}`;
		time_element.textContent = `${time} ${meridian}`;
	};

	update();
	setInterval(update, 1000 * 10);
}
