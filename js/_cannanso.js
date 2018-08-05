 // custom js for cannanso.com

var slideItem = function() {
 	$('#testimonials .next').click(function(){
 		var activeItem = $('#testimonials .active');
 		var nextItem = activeItem.next();

 		if(nextItem.length === 0) {
 			nextItem = $('.item').first();
 		}

 		activeItem.fadeOut(600).removeClass('active');
 		nextItem.fadeIn(600).addClass('active');
 	});

 	$('#testimonials .prev').click(function(){
 		var activeItem = $('#testimonials .active');
 		var prevItem = activeItem.prev();

 		if(prevItem.length === 0) {
 			prevItem = $('.item').last();
 		}

 		activeItem.fadeOut(600).removeClass('active');
 		prevItem.fadeIn(600).addClass('active');
 	}); 	

};

var stickyNav = function() {
	var win = $(window), 
		nav = $('.page-home header'),
		navBarHeight = nav.outerHeight()+1,
		navItems = $('#main-menu a');

	
	win.scroll(function(){

		var curPos = win.scrollTop();

		//sticky nav
		if (!nav.hasClass('fixed') && (curPos > nav.offset().top)){
			nav.addClass('fixed').data('top', nav.offset().top);
			$('.top-link').fadeIn();
		}
		else if (nav.hasClass('fixed') && (curPos < nav.data('top'))){
			nav.removeClass('fixed');
			$('.top-link').fadeOut();
		}

		//active state of sticky nav
		$('section').each(function(){
			var top = $(this).offset().top - navBarHeight,
			bottom = top + $(this).outerHeight(),
			sectionId = $(this).attr('id');
			if(curPos >= top && curPos <= bottom) {
				navItems.removeClass('active');
				navItems.filter('[href="#' + sectionId + '"]').addClass('active');
			}
		});
	});

	//smooth scrolling
	navItems.click(function(e){
		var href = $(this).attr('href'),
			offsetTop = $(href).offset().top - navBarHeight+1;
		$('html, body').stop().animate({ 
			scrollTop: offsetTop
		}, 800);
		e.preventDefault();
	});	

	var introButton = $('#intro .more');
	introButton.click(function(e) {
		var offsetTop = $("#portfolio").offset().top - navBarHeight+1;
		$('html, body').stop().animate({ 
			scrollTop: offsetTop
		}, 800);		
		e.preventDefault();
	});

	var introStrike = $('#intro i');
	$(introStrike).after('<span>line of code</span>');
};

var scrollTop = function() {
	$('.top-link').click(function(e){
		$('html, body').animate({
			scrollTop: 0
		}, 'slow');
		e.preventDefault();
	});
};

var posLightboxImg = function() {
	// displays image in the center of screen
	var top = ($(window).height() - $('#lightbox').height()) / 2;
	var left = ($(window).width() - $('#lightbox').width()) / 2;
	$('#lightbox')
		.css('top', top)
		.css('left', left)
		.fadeIn();
};

var removeLightbox = function() {
	$('#lb-overlay, #lightbox').fadeOut('slow', function() {
		$(this).remove();
		$('body').css('overflow-y', 'auto'); // show scrollbars
	});
};

// var portThumbs = function() {
// 	$('#portfolio .thumb').hover(
// 		function() {
// 			$(this).find('.tb-overlay').fadeIn();
// 		}, 
// 		function() {
// 			$(this).find('.tb-overlay').fadeOut();
// 	});
// };

var portCells = function() {
	$(".grid-cell").hover(
		function() {
			$(this).children('.caption').slideDown('fast');
			$(this).children('img').animate({marginTop:'-78px', marginBottom: '78px'}, 100);			
		}, 
		function() {
			$(this).children('.caption').slideUp('slow');
			$(this).children('img').animate({marginTop:'0', marginBottom: '0'}, 100);
		});
	$(".grid-cell").click(function(){
		var link = $(this).children('.caption').attr('href');
		window.location = link;
	});
};

var portLightbox = function() {
	$('.preview').click(function() {
		$('body').css('overflow-y', 'hidden'); // hide scrollbars

		$('<div id="lb-overlay"></div>')
			.css('opacity', '0')
			.animate({'opacity': '0.9'}, 'slow')
			.appendTo('body');

		$('<div id="lightbox"></div>')
			.hide()
			.html('<a class ="close fa fa-close" href="#"></a>')	
			.appendTo('body');

		$('<img>')
			.attr('src', $(this).attr('href'))
			.load(function(){
				posLightboxImg();
		})
		.click(function() {
			removeLightbox();
		})
		.appendTo('#lightbox');

		$('.close').click(function() {
			removeLightbox();
		});

		return false;
	});	
};

var contactVal = function() {
	$('#contact form').on('submit', function() {		
		$('.form-control').each(function() {
			if (!$(this).val().length) {
				$(this).css('border-color', 'red');
			} 
		})
		.blur(function() {
			if ($(this).val().length) {
				$(this).css('border-color', 'green');
			}
		});	
	});
};

$(document).ready(function(){

	slideItem();
	stickyNav();
	scrollTop();
	portCells();
	portLightbox();
	contactVal();

	//testimonal slideshow
	/* Since absolute positioning each item removes it from the DOM, 
	 give a flexible height to the wrapper. */
	var itemHeight = $('#testimonials .item').outerHeight();
	$('#testimonials .wrapper').css('height', itemHeight);

	//portfolio page animations
	$('.page-portfolio').hide(0).delay(400).fadeIn('slow');

});
