var GIF = GIF || {};
// GIF.App = GIF.App || {};

GIF.App = (function ( $, window, document, undefined ) {
	'use strict';


	var _handleSearchFiltering = function ( $searchInput ) {
	    $searchInput.keyup(function () {
	        var rex = new RegExp($(this).val(), 'i');
	        $('.js-searchable').hide();
	        $('.js-searchable').filter(function () {
	            return rex.test($(this).text());
	        }).show();
	    });
	};

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
			gifLinks = document.getElementsByClassName('gifLink'),
			$searchInput = $('.js-search');

		_handleClicks( gifPreviewHolder, gifLinks );
		_handleSearchFiltering( $searchInput );
	};


	return {
		init: setup
	};
})( jQuery, window, document );


// Kick it off
$(function(){
	GIF.App.init();
});