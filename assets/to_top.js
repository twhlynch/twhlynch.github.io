function scroll_to_top() {
	scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

export function setup_to_top() {
	const element = document.getElementById('toTop');

	if (!element) return;

	element.addEventListener('click', scroll_to_top);
}
