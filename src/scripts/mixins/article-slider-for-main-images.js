
/* swiper-article */

function initSwiper() {
	const swiperSlideMainImage = document.querySelectorAll('.main-images__swiper-slider');
	if (swiperSlideMainImage.length > 1) {
		const mainSwiper = document.querySelector('.swiper.main-images__swiper');
		const arrowsMainSwiper = document.querySelectorAll('.main-swiper__arrow');
		arrowsMainSwiper.forEach((arrow) => {
			mainSwiper.append(arrow);
		});
		// eslint-disable-next-line no-undef
		const swiperMainImages = new Swiper('.swiper.main-images__swiper', {
			speed: 700,
			autoHeight: true,
			simulateTouch: true,
			// How many slides
			slidesPerView: '1',
			spaceBetween: 60,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			// infinite
			loop: true,
			// loopedSlides: 20,
			navigation: {
				prevEl: '.main-swiper__arrow.secondary-swiper__prev',
				nextEl: '.main-swiper__arrow.secondary-swiper__next',
			},
		});

		swiperMainImages.updateAutoHeight(700);
	}
}

initSwiper();
