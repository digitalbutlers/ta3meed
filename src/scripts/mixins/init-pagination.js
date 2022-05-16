function initPagination() {
	// create a new Library instance and store it in a variable called "projectsGrid"
	// eslint-disable-next-line no-undef
	const projectsGrid = new FsLibrary('.js--collection-list');

	// run loadmore on our instance
	projectsGrid.loadmore({
		button: '.js--load-more-button',
		resetIx: true,
		loadAll: true,
		paginate: {
			enable: true,
			itemsPerPage: 6,
			insertPagination: '.js--pagination-container',
			bgColor: '#EEF2F4',
			bgColorActive: '#006ffb',
			textColor: '#232323',
			textColorActive: '#FFFFFF',
			/* borderColor: '#011f46' */
		},
		animation: {
			enable: false,
		},
	});
}

initPagination();
