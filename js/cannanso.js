var gridContainer = {
	wrappedContent: '',
	singPageInline: '',
	getPage: function(url) {
		$.ajax({
		    url: url,
		    type: 'GET',
		    dataType: 'html',
		    timeout: 5000
		})
	  .done(function (result) {
	      gridContainer.update(result);
	  })
	  .fail(function () {
	      gridContainer.update("Error! Please refresh the page!");
	  });
	},
	update: function(content) {
		this.wrappedContent = '<div class="popup-content">' + content + '</div>';
		this.wrappedContent += '<div class="popup-navigation"><i class="fa fa-times-circle-o" title="Close (Esc arrow key)" data-action="close"></i></div>';	
		this.singlePageInline = '<div class="popup-singlePageInline">' + this.wrappedContent + '</div>';

		$('.grid').prepend(this.singlePageInline);
	},
	open: function() {

	},
};

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
		$(this).addClass('singlePageInline-active');
		$(this).siblings().removeClass('singlePageInline-active');
		gridContainer.getPage(link);
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
	portCells();
	contactVal();

	$('#intro i').after('<span>line of code</span>');

	$(this).on('click', '.popup-navigation', function(){
		$('.popup-singlePageInline').remove();
		$('.singlePageInline-active').removeClass('singlePageInline-active');
	});

	//testimonal slideshow
	/* Since absolute positioning each item removes it from the DOM, 
	 give a flexible height to the wrapper. */
	var itemHeight = $('#testimonials .item').outerHeight();
	$('#testimonials .wrapper').css('height', itemHeight);

});
