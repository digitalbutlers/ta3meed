/** *menu-mob** */
document.addEventListener('DOMContentLoaded', () => {
	const targetEl = document.querySelector('.btn-absolute');

	function callback(mutations, observer) {
		if (targetEl.classList.contains('w--open')) {
			document.querySelector('body').style.overflow = 'hidden';
		} else {
			document.querySelector('body').style.overflow = 'auto';
		}
	}
	const observer = new MutationObserver(callback);
	observer.observe(targetEl, {
		attributes: true,
	});
});
/** *menu-mob** */
/** *include arabic version** */

const body = document.querySelector('body');
const wrpSwitcherLanguage = document.querySelector('.wrp-switcher-language');

function changeMarkup() {
	setTimeout(() => {
		const weglotSwitcher = document.querySelector('aside.weglot_switcher');
		if (weglotSwitcher.getAttribute('aria-activedescendant') === 'weglot-language-ar') {
			console.log(weglotSwitcher.getAttribute('aria-activedescendant'));
			body.classList.add('arabic');
		} else {
			console.log(weglotSwitcher.getAttribute('aria-activedescendant'));
			body.classList.remove('arabic');
		}
	}, 300);
}

function initObserver() {
	const targetEl = document.querySelector('aside.weglot_switcher');

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
	/* const btnArabic = document.querySelector('#weglot-language-ar');
	const btnEnglish = document.querySelector('#weglot-language-en');
	btnArabic.addEventListener('click', changeMarkup );
	btnEnglish.addEventListener('click', changeMarkup ); */
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
