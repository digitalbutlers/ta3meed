const locationDekstop = document.querySelector('[data-location="desktop"]');
const locationMobile = document.querySelector('[data-location="mobile"]');

const jumpingBtn = document.querySelector('[data-name="jumping-btn"]');

function changeLocation() {
	const currentWindowWidth = document.querySelector('body').clientWidth;
	// eslint-disable-next-line no-undef
	if (currentWindowWidth < BREAKPOINTS.tablet) {
		locationMobile.append(jumpingBtn);
	} else {
		locationDekstop.append(jumpingBtn);
	}
}
changeLocation();
window.addEventListener('resize', changeLocation);
