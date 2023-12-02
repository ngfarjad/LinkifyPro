document.querySelectorAll("body *").forEach(function (node) {
	if (node.tagName !== "A" && node.tagName !== "SCRIPT" && node.tagName !== "STYLE") {
		let child = node.firstChild;
		while (child) {
			if (child.nodeType === 3) {
				let text = child.nodeValue;
				let replacedText = text.replace(/(http[s]?:\/\/[^\s]+)/g, function (url) {
					return '<a href="' + url + '" target="_blank">' + url + "</a>";
				});

				if (replacedText !== text) {
					let newElem = document.createElement("span");
					newElem.innerHTML = replacedText;
					node.replaceChild(newElem, child);
				}
			}
			child = child.nextSibling;
		}
	}
});
