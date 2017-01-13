var links = document.getElementsByTagName('a');
function noClick(e) {
	e.preventDefault();
	return false;
}
(function () {
	for (let i = 0 ; i < links.length; i++) {
		links[i].addEventListener("click", noClick, false);
	}
})();