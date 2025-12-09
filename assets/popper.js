export function setup_popper() {
	const element = document.getElementById('popper');
	const text_element = document.getElementById('popper-text');

	if (!element || !text_element) return;

	const hide = () => {
		element.style.visibility = 'hidden';
	};
	const show = (target) => {
		element.style.visibility = 'visible';
		const text = target.getAttribute('data-popper') || 'Error :c';
		text_element.innerText = text;
	};

	document.addEventListener('mousemove', (e) => {
		let x = e.clientX - element.offsetLeft - element.offsetWidth / 2;
		let y = e.clientY - element.offsetTop - element.offsetHeight / 2;

		const pad = 10;
		y - element.offsetHeight * 1.5 > pad ? (y -= element.offsetHeight * 1.5) : (y += element.offsetHeight * 1.5);
		x < pad
			? (x = pad)
			: x > window.innerWidth - pad - element.offsetWidth
				? (x = window.innerWidth - pad - element.offsetWidth)
				: (x = x);

		element.style.transform = `translate(${x}px, ${y}px)`;
	});

	document.addEventListener('scroll', hide);

	const elements = document.querySelectorAll('.popper-element');

	let timeout;
	elements.forEach((el) => {
		if (el.classList.contains('popper-active')) return;

		el.addEventListener('mouseenter', () => show(el));
		el.addEventListener('mouseleave', hide);

		el.addEventListener('touchstart', () => {
			clearTimeout(timeout);
			timeout = setTimeout(hide, 1000);
		});
		el.classList.add('popper-active');
	});
}
