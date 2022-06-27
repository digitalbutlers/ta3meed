/* eslint-disable no-undef */
function initSecondarySwiper() {
	// eslint-disable-next-line no-unused-vars
	const swiperSecondaryImages = new Swiper('.swiper.article__secondary-swiper', {
		speed: 700,
		autoHeight: true,
		simulateTouch: true,
		// How many slides
		slidesPerView: '1',
		spaceBetween: 60,
		/* autoplay: {
                delay: 5000,
                disableOnInteraction: false,
        }, */
		// infinite
		loop: true,
		loopedSlides: 20,
		navigation: {
			prevEl: '.swiper-button-prev.secondary-swiper__prev',
			nextEl: '.swiper-button-next.secondary-swiper__next',
		},
		breakpoints: {
			// when window width is >= 1280px
			1280: {
				slidesPerView: '1',
				spaceBetween: 115,
			},
		},

	});
	/* swiperSecondaryImages.updateAutoHeight(700); */
}

function addSlidersInRichText() {
	const swipersWrappers = document.querySelectorAll('.images-grid');
	swipersWrappers.forEach((swiperWrapper) => {
		const swiper = document.createElement('div');
		swiper.classList.add('swiper');
		swiper.classList.add('arti');

		swiperWrapper.insertAdjacentHTML('beforebegin', `<div class="swiper article__secondary-swiper">
            <div class="swiper-button-prev secondary-swiper__arrow secondary-swiper__prev"></div>
            <div class="swiper-button-next secondary-swiper__arrow secondary-swiper__next"></div>
        </div>`);
		swiperWrapper.setAttribute('class', 'swiper-wrapper article__secondary-swiper-wrapper');
		swiperWrapper.previousElementSibling.prepend(swiperWrapper);
		const swiperSlides = swiperWrapper.childNodes;
		swiperSlides.forEach((slide) => {
			slide.setAttribute('class', 'swiper-slide article__secondary-slide');
		});
	});
	initSecondarySwiper();
}

function addWrapperForImages() {
	const figures = document.querySelectorAll('.article-content .w-richtext-figure-type-image');
	figures.forEach((figure) => {
		const prevElement = figure.previousElementSibling;
		const nextElement = figure.nextElementSibling;
		if (
			nextElement.classList.contains('w-richtext-figure-type-image')
            && !prevElement.classList.contains('w-richtext-figure-type-image')
            && !prevElement.classList.contains('images-grid')
		) {
			const imagesGrid = document.createElement('div');
			imagesGrid.classList.add('images-grid');
			figure.before(imagesGrid);
			imagesGrid.append(figure);
		} else if (prevElement.classList.contains('images-grid')) {
			figure.previousElementSibling.append(figure);
		}
	});
}

function checkParamsDisplayingImages() {
	const paramsboxes = document.querySelectorAll('[data-name="displaying"]');
	paramsboxes.forEach((box) => {
		if (!box.classList.contains('w-condition-invisible') && box.getAttribute('data-displaying') === 'slider') {
			addWrapperForImages();
			addSlidersInRichText();
		} else if (!box.classList.contains('w-condition-invisible') && box.getAttribute('data-displaying') === 'grid') {
			addWrapperForImages();
		}
	});
}
checkParamsDisplayingImages();
