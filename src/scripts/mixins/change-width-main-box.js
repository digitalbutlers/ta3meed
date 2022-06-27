
function settingWidtgMainBox() {
	const mainContent = document.querySelector('.article-main');
	const largeСontainer = document.querySelector('.large-container');
	if (!largeСontainer.classList.contains('w-condition-invisible')) {
		mainContent.classList.add('js--big-size');
	}
}

settingWidtgMainBox();
