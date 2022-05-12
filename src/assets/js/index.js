class ProjectApp {
	constructor() {
		// this.env = require('./utils/env').default;
		this.utils = require('./utils/utils').default;
		// this.classes = {
		// 	Signal: require('./classes/Signal').default,
		// };
		this.basket = require('./components/basket').default;
		this.helpers = {};
		this.modules = {};
		document.addEventListener('DOMContentLoaded', () => {
			document.documentElement.classList.remove('_loading');
		});
	}
}

global.ProjectApp = new ProjectApp();

global.ProjectApp.basket.init();

if (module.hot) {
	module.hot.accept();
}
