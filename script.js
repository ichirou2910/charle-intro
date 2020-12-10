// === MODAL HANDLING ===
let statisticsModal = document.getElementById('statistics');
let modalEntry = document.getElementsByClassName('statistics__entry')[0];
let modalClose = document.getElementsByClassName('modal__close')[0];

modalEntry.onclick = () => {
	statisticsModal.style.display = 'block';
};

modalClose.onclick = () => {
	statisticsModal.style.display = 'none';
};

window.onclick = (event) => {
	if (event.target == statisticsModal) {
		statisticsModal.style.display = 'none';
	}
};

document.onkeydown = (event) => {
	event = event || window.event;
	if (event.key === 'Escape') {
		if (statisticsModal.style.display === 'block') {
			statisticsModal.style.display = 'none';
		}
	}
};

// === HELPER FUNCTIONS
const openTab = (event, tabId) => {
	let i, x, tabBtns;
	x = document.getElementsByClassName('tab-item');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	tabBtns = document.getElementsByClassName('navbar__tab-link');
	for (i = 0; i < x.length; i++) {
		tabBtns[i].className = tabBtns[i].className.replace(
			' btn-active',
			' btn-inactive'
		);
	}
	document.getElementById(tabId).style.display = 'block';
	clickedBtn = event.currentTarget;
	clickedBtn.className = clickedBtn.className.replace(
		' btn-inactive',
		' btn-active'
	);
};
