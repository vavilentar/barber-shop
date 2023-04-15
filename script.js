const headerMenuItems = document.querySelectorAll('.menu_item');

headerMenuItems.forEach((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		for (let i = 0; i < headerMenuItems.length; i++) {
			headerMenuItems[i].classList.remove('item_active')
		}
		item.classList.add('item_active');
	})
})