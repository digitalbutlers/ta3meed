

const imageBox1 = document.querySelector('[data-name="image-post"]');
const imageVideo1 = document.querySelectorAll('[data-name="video-box"]');

imageVideo1.forEach((element) => {
	if (!element.classList.contains('w-condition-invisible')) {
		imageBox1.remove();
	}
});
