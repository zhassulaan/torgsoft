function swipeTo(elem_id) {
	let elems = document.getElementsByClassName('products_data');
	let btns = document.getElementsByClassName('swipe_btn');

	for (let el of elems) {
		el.classList.remove('_active');
	}

	let btn = null;
	for (let el of btns) {
		el.classList.remove('_active');
		if (el.dataset.swipeId == elem_id) {
			btn = el;
		}
	}

	let el = document.getElementById(`products_data_no_${elem_id}`);
	el.classList.add('_active');
	if (btn) {
		btn.classList.add('_active');
	}
}

function mapSwipeBtns() {
	let swipe_btns = document.getElementsByClassName('swipe_btn');
	let prev_btn = document.querySelector('.page_prev.swipe_page');
	let next_btn = document.querySelector('.page_next.swipe_page');

	for (let btn of swipe_btns) {
		let swipe_id = btn.dataset.swipeId;
		btn.onclick = () => {
			swipeTo(swipe_id);
		}
	}
	
	prev_btn.onclick = function () {
		for (let btn of swipe_btns) {
			if (btn.classList.contains('_active')) {
				swipeTo(Number(btn.dataset.swipeId) == 1 ? 3 : Number(btn.dataset.swipeId) - 1);
				break;
			}
		}
	}
	
	next_btn.onclick = function () {
		for (let btn of swipe_btns) {
			if (btn.classList.contains('_active')) {
				swipeTo(Number(btn.dataset.swipeId) == 3 ? 1 : Number(btn.dataset.swipeId) + 1);
				break;
			}
		}
	}
}

function load() {
	swipeTo(1);
	mapSwipeBtns();
}
