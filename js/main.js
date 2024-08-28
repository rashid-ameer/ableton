const collapsibles = document.querySelectorAll(".collapsible");

Array.prototype.slice.call(collapsibles).forEach(function (item) {
	console.log("Y");
	item.addEventListener("click", (event) => {
		const childTarget = event.target.className.baseVal;
		const parentTarget = event.target.parentNode.className.baseVal;
		if (childTarget.includes("navigator") || parentTarget.includes("navigator")) {
			item.classList.toggle("collapsible--expanded");
		}
	});
});
