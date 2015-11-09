function updateSinglePageInline(content){
	var wrappedContent = '<div class="popup-content">' + content + '</div>';
			wrappedContent += '<div class="popup-navigation"><i class="fa fa-times-circle-o" title="Close (Esc arrow key)" data-action="close"></i></div>';	
	var singlePageInline = '<div class="popup-singlePageInline">' + wrappedContent + '</div>';

	$('.grid').prepend(singlePageInline);
	
}

var gridContainer = function(url) {
	$.ajax({
	    url: url,
	    type: 'GET',
	    dataType: 'html',
	    timeout: 5000
	})
  .done(function (result) {
      updateSinglePageInline(result);
  })
  .fail(function () {
      updateSinglePageInline("Error! Please refresh the page!");
  });
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
		gridContainer(link);
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
	});

	//testimonal slideshow
	/* Since absolute positioning each item removes it from the DOM, 
	 give a flexible height to the wrapper. */
	var itemHeight = $('#testimonials .item').outerHeight();
	$('#testimonials .wrapper').css('height', itemHeight);

});
