class Accordeon {
	constructor(container) {
		this.container = container;

		this.init();
		this.clickMenu();
	}
	init() {
		this.container.querySelectorAll('.body').forEach(element => {
			element.classList.add('js-not-active')
		});
	}

	clickMenu() {
		let activeMenu;
		const title = this.container.querySelectorAll('.title');
		
		title.forEach(function (element) {
			element.addEventListener('click', function () {
				this.nextElementSibling.classList.toggle('js-not-active');
				if (activeMenu) {
					activeMenu.nextElementSibling.classList.add('js-not-active');
				}
				activeMenu = (activeMenu === this) ? '' : this;
			});
		})
	};
};



new Accordeon(document.getElementById('list'));