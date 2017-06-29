(function($) {
	 	$("#map-4").easymap({
		size: ['100%', '500px'],
		control: {
			zoom:8,
			center: [40.2337360, -76.9355210]
			
		},
		markers: [
			{"latitude":40.2337360,"longitude":-76.9355210,"ville":"Camp Hill<br />Boscov's Travel, Camp Hill Shopping Center<br />170 S 32nd St<br />Camp Hill PA 17011<br />Phone: 717-763-1100<br />Email: bostravcamphill@boscovs.com", "icone": "yellow/images/index.png"},
			
		]
	});
})(jQuery);

