window.addEventListener('scroll', ev => {
	document.getElementById("nav-bar").style.borderColor = this.scrollY === 0 ? `transparent` : `black`;
});

[...document.getElementsByClassName("project-expand-button")].forEach(e => {
	e.addEventListener("click", ev => {
		const section = e.parentElement.parentElement.children[1];

		if (section.style.height) {
			section.style.height = "";
			e.children[0].style.transform = "";
		}
		else {
			section.style.height = section.children[0].clientHeight + "px";
			e.children[0].style.transform = "rotateZ(180deg)";
		}
	});
});

[...document.getElementsByClassName("image-carousel")].map(carousel => [...carousel.children]).map(items => {
	const div = items[0];

	items[1].addEventListener("click", ev => {
		const leftString = div.style.left || "0%";
		const leftNumber = Number(leftString.match(/[0-9]+/)[0]);

		let newValue = leftNumber - 100;
		if (newValue < 0) newValue = (div.childElementCount - 1) * 100;
		div.style.left = `-${newValue}%`;
	});

	items[2].addEventListener("click", ev => {
		const leftString = div.style.left || "0%";
		const leftNumber = Number(leftString.match(/[0-9]+/)[0]);

		let newValue = leftNumber + 100;
		if (newValue / 100 >= div.childElementCount) newValue = 0;
		div.style.left = `-${newValue}%`;
	});
})