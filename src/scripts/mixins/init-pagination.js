(function() {
	// create a new Library instance and store it in a variable called "projectsGrid"
	var projectsGrid = new FsLibrary('.collection-list')
  
	// run loadmore on our instance
  projectsGrid.loadmore({
		button: ".load-more-button",
    resetIx: true,
    loadAll: true,
    paginate: {
			enable: true,
			itemsPerPage: 6,
			insertPagination: '.pagination-container',
			bgColor: '#EEF2F4',
			bgColorActive: '#006ffb',
			textColor: '#232323',
      textColorActive: '#FFFFFF',
			/*borderColor: '#011f46'*/
    },
		animation: {
			enable: false
		}
	})
})();