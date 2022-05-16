
document.addEventListener('DOMContentLoaded', () => {
	const targetEl = document.querySelector('.btn-absolute');
	const body = document.querySelector('body');
	// eslint-disable-next-line no-unused-vars
	function callback(mutations, observer) {
		if (targetEl.classList.contains('w--open')) {
			body.classList.add('overflow-hidden');
		} else {
			body.classList.remove('overflow-hidden');
		}
	}
	const observer = new MutationObserver(callback);
	observer.observe(targetEl, {
		attributes: true,
	});
});
