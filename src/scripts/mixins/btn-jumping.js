const locationDekstop = document.querySelector('[data-location="desktop"]');
const locationMobile = document.querySelector('[data-location="mobile"]');
const breakpoint = 992;

const jumpingBtn = document.querySelector('[data-name="jumping-btn"]');

function changeLocation() {
	const currentWindowWidth = document.querySelector('body').clientWidth;
	if (currentWindowWidth < breakpoint) {
		locationMobile.append(jumpingBtn);
	} else {
		locationDekstop.append(jumpingBtn);
	}
}
changeLocation();
window.addEventListener('resize', changeLocation);

