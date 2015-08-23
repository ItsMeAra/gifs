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

	var _handleClicks = function ( gifPreviewImg, gifLinks, gifImgLink ) {
		for(var i=0; i < gifLinks.length; i++) {
			gifLinks[i].addEventListener( 'click', function( evt ){
				evt.preventDefault();
				gifPreviewImg.src = evt.target.href;
				gifImgLink.href = evt.target.href;
			});
		}
	};

	

	var setup = function () {
		var gifPreviewImg = document.getElementById('js-gifPreviewImg'),
			gifImgLink = document.getElementById('js-gifImgLink'),
			gifLinks = document.getElementsByClassName('js-gifLink'),
			$searchInput = $('.js-search');

		_handleClicks( gifPreviewImg, gifLinks, gifImgLink );
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