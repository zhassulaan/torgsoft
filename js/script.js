function swipeTo(elem_id) {
	let elems = document.getElementsByClassName('products_data');
	let numb_btns = document.getElementsByClassName('swipe_btn_page');
	let arrow_btns = document.getElementsByClassName('swipe_btn');
	for (let el of elems) {
		el.classList.remove('_active');
	}
	let btn = null;
	for (let el of numb_btns) {
		el.classList.remove('_active');
		if (el.dataset.swipeId == elem_id) {
			btn = el;
		}
	}
	let el = document.getElementById(`products_data_no_${elem_id}`)
	el.classList.add('_active');
	if (btn) {
		btn.classList.add('_active');
	}
}

function load() {
	swipeTo(1);
	let swipe_btns = document.getElementsByClassName('swipe_btn');
	for (let btn of swipe_btns) {
		console.log(btn.dataset);
		let swipe_id = btn.dataset.swipeId;
		btn.onclick = () => {
			swipeTo(swipe_id);
		}
	}
}