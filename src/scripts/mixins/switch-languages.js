const currentHost = window.location.host;
const currentSlug = window.location.pathname.slice(1, 4);
const slugForBlog = window.location.pathname.slice(1, 5);
const switcherLanguages = document.querySelectorAll('[data-name="switcher-language"]');
let newSlug;
let newUrl;


function createLocale() {
	if (currentSlug === 'en/' || (currentSlug.length === 2 && currentSlug === 'en')) {
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
	newUrl = `https://${currentHost}/${newSlug}`;
}
createLocale();

function setLocale() {
	document.location.href = newUrl;
}

fetch(newUrl)
	.then((response) => {
		if (response.status === 404) {
			switcherLanguages.forEach((btn) => {
				btn.classList.add('js--disabled');
			});
		}
	})
	.catch((error) => {
		switcherLanguages.forEach((btn) => {
			btn.classList.add('js--disabled');
		});
		console.log('error is', error);
	});

switcherLanguages.forEach((btn) => {
	btn.addEventListener('click', setLocale);
});
