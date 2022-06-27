

function changeLocationMainImages(location) {
	const titleBox = document.querySelector('[data-name="title-box"]');
	const mainImagesBox = document.querySelector('[data-name="main-images"]');
	const adjacentBox = document.querySelector('.article__adjacent-box');
	const shareSourcesWrapper = document.querySelector('.share-sources__wrapper');
	const mainContent = document.querySelector('.article-main');
	const mainSection = document.querySelector('.section.article');

	if (location === 'above') {
		mainImagesBox.classList.add('js--mb0');
		titleBox.before(mainImagesBox);
		titleBox.classList.add('js--big-margin');
	} else if (location === 'nearby') {
		adjacentBox.append(mainImagesBox);
		titleBox.classList.add('js--big-margin');
		shareSourcesWrapper.classList.add('js--flex-vertical');
		mainContent.classList.add('js--big-size');
		mainSection.classList.add('js--grid-section');
	}
}
function findCorrectLocation() {
	const verificationBlocks = document.querySelectorAll('[data-name="verification-block"]');

	verificationBlocks.forEach((block) => {
		if (!block.classList.contains('w-condition-invisible')) {
			const location = block.getAttribute('data-location');
			changeLocationMainImages(location);
		}
	});
}
findCorrectLocation();
