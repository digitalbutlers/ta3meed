
/** *include arabic version** */

const body = document.querySelector('body');
const wrpSwitcherLanguage = document.querySelector('.wrp-switcher-language');

function changeMarkup() {
	setTimeout(() => {
		const weglotSwitcher = document.querySelector('aside.weglot_switcher');
		if (weglotSwitcher.getAttribute('aria-activedescendant') === 'weglot-language-ar') {
			body.classList.add('arabic');
		} else {
			body.classList.remove('arabic');
		}
	}, 300);
}

function initObserver() {
	const targetEl = document.querySelector('aside.weglot_switcher');

	// eslint-disable-next-line no-unused-vars
	function callback(mutations, observer) {
		if (targetEl.getAttribute('aria-activedescendant') === 'weglot-language-ar') {
			body.classList.add('arabic');
		} else {
			body.classList.remove('arabic');
		}
	}
	const observerLanguage = new MutationObserver(callback);
	observerLanguage.observe(targetEl, {
		attributes: true,
	});
}

function initializingVerification() {
	changeMarkup();
	const weglotContainer = document.querySelector('.weglot-container');
	wrpSwitcherLanguage.append(weglotContainer);
	initObserver();
}

const intervalCheckLoadingWeglot = setInterval(() => {
	if (document.querySelector('.weglot-container') !== null && document.querySelector('.weglot-container').tagName === 'DIV') {
		initializingVerification();
		clearInterval(intervalCheckLoadingWeglot);
	}
}, 50);

/* чистим сет интервал, если код веглота не подгрузился за пять секунд */

setTimeout(() => {
	clearInterval(intervalCheckLoadingWeglot);
}, 7000);


/** *include arabic version** */
