var preview = document.getElementById("preview");

function hoverListener(evt) {
	evt.preventDefault();
	preview.src = evt.target.href;
};

var links = document.getElementsByClassName("gif");
for(var i=0; i<links.length; i++) {
	links[i].addEventListener("click", hoverListener);
}