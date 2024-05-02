// Don't judge me on this please. We did not have much time to work on our portfolios so the code for this whole website
// is very rushed and at times even written on phone so there are lots of better ways to do this, the HTML, and the CSS

window.addEventListener('scroll', ev => {
	document.getElementById("nav-bar").style.borderColor = this.scrollY === 0 ? `transparent` : `black`;
});

[...document.getElementsByClassName("expand-button")].forEach(e => {
	const section = [...e.parentElement.parentElement.children].at(e.parentElement.id === "about-me-expand-section" ? -2 : 1);
	const resize = () => { section.style.height = section.children[0].clientHeight + "px"; };

	e.addEventListener("click", ev => {
		if (section.style.height) {
			section.style.height = "";
			e.children[0].style.transform = "";

			window.removeEventListener("resize", resize);
		}
		else {
			section.style.height = section.children[0].clientHeight + "px";
			e.children[0].style.transform = "rotateZ(180deg)";

			window.addEventListener("resize", resize);
		}
	});
});

[...document.getElementsByClassName("image-carousel")].map(carousel => [...carousel.children]).map(items => {
	try {
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
	}
	catch (e) { }
})
