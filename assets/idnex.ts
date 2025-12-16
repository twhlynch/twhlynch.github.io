const quotes = [
	':3',
	'>:3',
	':>',
	'♥︎',
	'▲ ▲ ▼ ▼ ◄ ► ◄ ► B A',
	'discord.gg/YKfGWSYAqf',
	'Tell index I said hi',
	'Play GRAB on Meta Quest!',
	"Help I'm stuck in this website!",
	"I'm just gonna sit here and cry for a little bit",
	"Despite everything, it's still you ♥︎",
	'Hate. Let me tell you..',
	"It's smorgin' time",
	'Never gonna give you up',
	'According to all known laws of aviation..',
	'index was here',
	'Rock paper scissors, you go first',
	'What a nice view, do you?',
];

export function setup_idnex() {
	const element = document.getElementById('idnex');
	const quote_element = document.getElementById('idnex-quote');

	if (!element || !quote_element) return;

	const hide = () => {
		element.style.display = 'none';
	};
	const show = () => {
		element.style.display = 'flex';
	};

	let index = 0;
	const update = () => {
		show();

		// random quote
		index = Math.floor(Math.random() * quotes.length);

		quote_element.innerHTML = quotes[index];

		// hide after 2 seconds
		setTimeout(hide, 1000 * 2);
	};

	// every 20 seconds
	setInterval(update, 1000 * 20);
}
