document.getElementById("convert").addEventListener("click", function () {
	chrome.tabs.executeScript({
		code: "/* code from content.js */",
	});
});
