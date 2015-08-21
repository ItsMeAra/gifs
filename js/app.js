// var preview = document.getElementById("preview");

// function hoverListener(evt) {
// 	evt.preventDefault();
// 	preview.src = evt.target.href;
// };

// var links = document.getElementsByClassName("gif");
// for(var i=0; i<links.length; i++) {
// 	links[i].addEventListener("click", hoverListener);
// }


var GIF = GIF || {};
// GIF.App = GIF.App || {};

GIF.App = (function ( $, window, document, undefined ) {
	'use strict';




	var _handleClicks = function ( gifPreviewHolder, gifLinks ) {
		for(var i=0; i < gifLinks.length; i++) {
			gifLinks[i].addEventListener( 'click', function( evt ){
				evt.preventDefault();
				gifPreviewHolder.src = evt.target.href;
			});
		}
	};

	

	var setup = function () {
		var gifPreviewHolder = document.getElementById('preview'),
			gifLinks = document.getElementsByClassName('gif');

		_handleClicks( gifPreviewHolder, gifLinks );
	};


	return {
		init: setup
	};
})( jQuery, window, document );


// Kick it off
$(function(){
	GIF.App.init();
});