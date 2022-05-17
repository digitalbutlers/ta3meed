

const financeBox = document.querySelector('.finance-box');
const sortedElements = financeBox.querySelectorAll('[data-title="thematic-block"]');
const icons = document.querySelectorAll('[data-name="icons"]');

function changeActiveElement(currentNumber, currentCategory) {
	sortedElements.forEach((element) => {
		if (element.closest('[data-categories]') !== null && element.closest('[data-categories]').getAttribute('data-categories') === currentCategory) {
			element.classList.remove('active');
		}
	});
	sortedElements.forEach((element) => {
		if (element.closest('[data-categories]') !== null && element.closest('[data-categories]').getAttribute('data-categories') === currentCategory && element.getAttribute('data-current-number') === currentNumber) {
			element.classList.add('active');
		}
	});
	icons.forEach((icon) => {
		if (icon.closest('[data-categories]') !== null && icon.closest('[data-categories]').getAttribute('data-categories') === currentCategory) {
			icon.classList.remove('active');
		}
	});
	icons.forEach((icon) => {
		if (icon.closest('[data-categories]') !== null && icon.closest('[data-categories]').getAttribute('data-categories') === currentCategory && icon.classList.contains(`js--${currentNumber}`)) {
			icon.classList.add('active');
		}
	});
}

function readCurrentAttributes(event) {
	if (event.target.getAttribute('data-title') === 'thematic-block') {
		const serialNumber = event.target.getAttribute('data-current-number');
		const nameCategory = event.target
			.closest('[data-categories]')
			.getAttribute('data-categories');
		changeActiveElement(serialNumber, nameCategory);
	} else if (event.target.closest('[data-title]') !== null && event.target.closest('[data-title]').getAttribute('data-title') === 'thematic-block') {
		const serialNumber = event.target.closest('[data-title]').getAttribute('data-current-number');
		const nameCategory = event.target
			.closest('[data-categories]')
			.getAttribute('data-categories');
		changeActiveElement(serialNumber, nameCategory);
	}
}

financeBox.addEventListener('click', readCurrentAttributes);
