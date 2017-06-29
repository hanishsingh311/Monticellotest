	$(document).ready(function(){
		$("#search").click(function () {
		$(".search_form").slideToggle("fast");
		});
	});

$(document).ready(function() {
      $("#owl-demo1").owlCarousel({
     autoPlay: false, //Set AutoPlay to 3 seconds
     	  navigation:true,
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsMobile : [639,1]
      });
    });
	$(document).ready(function() {
      $("#owl-demo2").owlCarousel({
     autoPlay: false, //Set AutoPlay to 3 seconds
     	  navigation:true,
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsMobile : [639,1]
      });
    });
	$(document).ready(function() {
      $("#owl-demo3").owlCarousel({
     autoPlay: false, //Set AutoPlay to 3 seconds
     	  navigation:true,
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsMobile : [639,1]
      });
    });
	$(document).ready(function() {
      $("#owl-demo4").owlCarousel({
     autoPlay: false, //Set AutoPlay to 3 seconds
     	  navigation:true,
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsMobile : [639,1]
      });
    });
	$(document).ready(function() {
      $("#owl-demo5").owlCarousel({
     autoPlay: false, //Set AutoPlay to 3 seconds
     	  navigation:true,
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsMobile : [639,1]
      });
    });


			(function() {
				// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					classie.add( ev.target.parentNode, 'input--filled' );
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode, 'input--filled' );
					}
				}
			})();
		
	$(document).ready(function() {	  
	  $('#mobile-menu').hide();
        $('a.menu-toggle').click(function(e) {
			$(this).toggleClass('selected');
            $('#mobile-menu').slideToggle();
			return false
        });
		
		$('.sf-menu').clone().appendTo('.menu-category').addClass('accordion');
		$('.accordion').dcAccordion({
			eventType: 'click',
			autoClose: true,
			saveState: false,
			disableLink: true,
			showCount: false,
			speed: 'slow'
		});
	});

	$(function() {
		//Initialize filterizr with default options
		$('.filtr-container').filterizr();
	});
