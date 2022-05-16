/* ---change-Description--- */

const decrAboutClients = document.querySelector('.about-clients');
const decrAboutSuppliers = document.querySelector('.about-suppliers');
document.addEventListener('DOMContentLoaded', () => {
	const targetEl = document.querySelector('[word-content="clients"]');

	// eslint-disable-next-line no-unused-vars
	function callback(mutations, observer) {
		if (targetEl.classList.contains('active')) {
			decrAboutSuppliers.style.display = 'none';
			decrAboutClients.style.display = 'block';
		} else {
			decrAboutClients.style.display = 'none';
			decrAboutSuppliers.style.display = 'block';
		}
	}
	const observer = new MutationObserver(callback);
	observer.observe(targetEl, {
		attributes: true,
	});
});

/* ---change-Description--- */
/* ---interval--- */
const faqQuestion = document.querySelectorAll('.faq-question');
const hiddenBlocks = document.querySelectorAll('.faq-answer-wrapper');
const questionItems = document.querySelectorAll('.faq-item');
const questions = document.querySelectorAll('.faq-item');
let num = 0;

const interval = setInterval(() => {
	num += 1;
	if (num === questions.length) {
		num = 0;
	}

	questions.forEach((elem, index) => {
		if (index === num) {
			const parentElem = elem.closest('.faq-item');
			const hiddenBlock = parentElem.querySelector('.faq-answer-wrapper');
			const hiddenBlockHeight = hiddenBlock.scrollHeight;
			hiddenBlocks.forEach((item, ind) => {
				const block = item;
				if (index === ind) {
					if (item.classList.contains('active')) {
						item.closest('.faq-item').classList.remove('active');
						item.classList.remove('active');
						block.style.height = `${0}px`;
					} else {
						item.closest('.faq-item').classList.add('active');
						item.classList.add('active');
						block.style.height = `${hiddenBlockHeight}px`;
					}
				} else {
					item.closest('.faq-item').classList.remove('active');
					item.classList.remove('active');
					block.style.height = `${0}px`;
				}
			});
		}
	});
}, 5000);
/* ---interval--- */
/* ---faq--- */
faqQuestion.forEach((elem, numb) => {
	elem.addEventListener('click', () => {
		clearInterval(interval);
		if (!elem.closest('.faq-item').classList.contains('active')) {
			const parentElem = elem.closest('.faq-item');
			const hiddenBlock = parentElem.querySelector('.faq-answer-wrapper');
			const hiddenBlockHeight = hiddenBlock.scrollHeight;
			hiddenBlocks.forEach((item, ind) => {
        const wrp = item;
				if (numb === ind) {
					if (item.classList.contains('active')) {
						item.closest('.faq-item').classList.remove('active');
						item.classList.remove('active');
						wrp.style.height = `${0}px`;
					} else {
						item.closest('.faq-item').classList.add('active');
						item.classList.add('active');
						wrp.style.height = `${hiddenBlockHeight}px`;
					}
				} else {
					item.closest('.faq-item').classList.remove('active');
					item.classList.remove('active');
					wrp.style.height = `${0}px`;
				}
			});
		}
	});
});
/* ---faq--- */

function addHeightCurrentActive() {
	questionItems.forEach((elem) => {
		if (elem.classList.contains('active')) {
			const wrapperAnswer = elem.querySelector('.faq-answer-wrapper');
			const heightWrapperAnswer = wrapperAnswer.scrollHeight;
			wrapperAnswer.style.height = `${heightWrapperAnswer}px`;
		}
	});
}
addHeightCurrentActive();
/* ------------radio----------- */
const formBlock = document.querySelector('.form-block');
const radioButtons = formBlock.querySelectorAll('.radio-button');
const hiddenInput = formBlock.querySelector('[data-name= "hidden-input"]');

function showInput() {
	radioButtons.forEach((elem) => {
		const input = elem.querySelector('input');
		if (input.checked) {
			hiddenInput.classList.add('active');
		} else {
			hiddenInput.classList.remove('active');
		}
	});
}
showInput();
radioButtons.forEach((elem) => {
	elem.addEventListener('click', showInput);
});
/* ------radio-------- */
/* ---changePrograms--- */
const financeListClients = document.querySelector('.finance-list.clients');
const financeListSuppliers = document.querySelector('.finance-list.suppliers');
const financeChemeClients = document.querySelector('.finance-cheme.clients');
const financeChemeSuppliers = document.querySelector(
	'.finance-cheme.suppliers',
);
const switsh = document.querySelector('.switch-parent');

function changePrograms() {
	if (!switsh.querySelector('input').checked) {
		switsh.previousElementSibling.classList.add('active');
		switsh.nextElementSibling.classList.remove('active');
		financeListClients.classList.add('active');
		financeChemeClients.classList.add('active');
		financeListSuppliers.classList.remove('active');
		financeChemeSuppliers.classList.remove('active');
	} else {
		switsh.previousElementSibling.classList.remove('active');
		switsh.nextElementSibling.classList.add('active');
		financeListSuppliers.classList.add('active');
		financeChemeSuppliers.classList.add('active');
		financeListClients.classList.remove('active');
		financeChemeClients.classList.remove('active');
	}
}
changePrograms();

switsh.addEventListener('click', changePrograms);

/* ---changePrograms--- */
/* ---activeWordSwitch--- */

const wordsSwitch = document.querySelectorAll('[data-name="word-switch"]');

function changeProgram() {
	wordsSwitch.forEach((elem) => {
		elem.classList.remove('active');
	});

	if (this.getAttribute('word-content') === 'clients') {
		this.classList.add('active');
		switsh.querySelector('input').checked = false;
	} else if (this.getAttribute('word-content') === 'suppliers') {
		this.classList.add('active');
		switsh.querySelector('input').checked = true;
	}

	changePrograms();
}

wordsSwitch.forEach((elem) => {
	elem.addEventListener('click', changeProgram);
});

/* ---activeWordSwitch---*/
