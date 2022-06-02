function generateNewUrl() {
	const currentHost = window.location.host;
	const currentSlug = window.location.pathname.slice(1, 4);
	const slugForBlog = window.location.pathname.slice(1, 5);

	let newSlug;

	if (currentSlug === 'en/' || currentSlug === 'en') {
		newSlug = window.location.pathname.slice(4);
	} else if (slugForBlog === 'news') {
		if (window.location.pathname.slice(1, 9) === 'news-en/') {
			newSlug = `news/${window.location.pathname.slice(9)}`;
		} else {
			newSlug = `news-en/${window.location.pathname.slice(6)}`;
		}
	} else {
		newSlug = `en${window.location.pathname}`;
	}
	return `https://${currentHost}/${newSlug}`;
}

function toggleLocale() {
	document.location.href = generateNewUrl();
}

(function checkIsPageExist() {
	const switchersLanguages = document.querySelectorAll('[data-name="switcher-language"]');

	fetch(generateNewUrl())
		.then((response) => {
			if (response.status !== 200) {
				switchersLanguages.forEach((btn) => {
					btn.classList.add('js--disabled');
				});
			} else {
				switchersLanguages.forEach((btn) => {
					btn.addEventListener('click', toggleLocale);
				});
			}
		})
		.catch((error) => {
			switchersLanguages.forEach((btn) => {
				btn.classList.add('js--disabled');
			});
			// eslint-disable-next-line no-console
			console.error('error is', error);
		});
}());
