const switchesAward = document.querySelectorAll('.partners-list .big-block');

switchesAward.forEach((elem) => {
	if (!elem.classList.contains('w-condition-invisible')) {
		elem.closest('.partner-item').classList.add('js--partner-item_big');
	}
});
