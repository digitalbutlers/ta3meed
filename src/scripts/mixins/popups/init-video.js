
$(() => {
	$('.js--video-popup').magnificPopup({
		// delegate: "a",
		type: 'iframe',
		tLoading: 'Loading iframe #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
		},
		iframe: {
			titleSrc(item) {
				return item.el.attr('title');
			},
		},
	});
});
