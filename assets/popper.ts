export function setup_popper() {
	const element = document.getElementById('popper');
	const text_element = document.getElementById('popper-text');

	if (!element || !text_element) return;

	const hide = () => {
		element.style.visibility = 'hidden';
	};
	const show = (target: Element) => {
		element.style.visibility = 'visible';
		const text = target.getAttribute('data-popper') || 'Error :c';
		text_element.innerText = text;
	};

	document.addEventListener('mousemove', (e) => {
		const win_padding = 10;
		const height_offset = element.offsetHeight * 1.5;

		// center on cursor
		let x = e.clientX - element.offsetLeft - element.offsetWidth / 2;
		let y = e.clientY - element.offsetTop - element.offsetHeight / 2;

		// move up if theres room otherwise down
		y += y - height_offset > win_padding ? -height_offset : height_offset;

		// slide away from sides of screen
		const left = win_padding;
		const right = window.innerWidth - win_padding - element.offsetWidth;
		x = Math.max(left, Math.min(x, right));

		element.style.transform = `translate(${x}px, ${y}px)`;
	});

	// hide on scroll
	document.addEventListener('scroll', hide);

	const elements = document.querySelectorAll('.popper-element');

	let timeout: NodeJS.Timeout | undefined;
	elements.forEach((el) => {
		// show on hover
		el.addEventListener('mouseenter', () => show(el));
		el.addEventListener('mouseleave', hide);

		// shortly show on touch (maybe remove since they are links now)
		el.addEventListener(
			'touchstart',
			() => {
				clearTimeout(timeout);
				timeout = setTimeout(hide, 1000);
			},
			{ passive: true },
		);
	});
}
