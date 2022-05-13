const switchesAward = document.querySelectorAll('.partners-list .big-block');

switchesAward.forEach((elem) => {
	if (!elem.classList.contains('w-condition-invisible')) {
		elem.closest('.partner-item').classList.add('partner-item_big');
		console.log('нет класса invisible');
	} else {
		console.log('есть класс invisible');
	}
});
