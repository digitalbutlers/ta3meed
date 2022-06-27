


function makeStructureForPopaps() {
	const imagesInRichText = document.querySelectorAll('.article-content img');

	imagesInRichText.forEach((image) => {
		const imageSrc = image.getAttribute('src');
		const figure = image.closest('figure');
		figure.classList.add('picture');
		figure.setAttribute('data-src', imageSrc);
	});
}

makeStructureForPopaps();
