var gridContainer = {
	wrappedContent: '',
	singPageInline: '',
	pushDownHeight: '',
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
		setTimeout( $.proxy( function() {	
			// set the height for the preview and the item
			this.setHeights();
			// scroll to position the preview in the right place
			this.positionPreview();
		}, this ), 25 );
	},
	setHeights: function() {
		// var winsize = { width: $(window).width(), height: $(window).height() };
		$('.singlePageInline-active').animate({height: "250px"}, 500);
		$('.singlePageInline').animate({height: "800px"}, 500);
	},
	positionPreview: function() {
		//scrollTop
		console.log('scroll to position the preview in the right place');
	},
	init: function() {
		// move gridCells function to here
	}
};

//move these two functions to gridContainer();
  function collapseAll(){
    $('.active').removeClass('active').css({'height': 'auto'});
    $('.expander').slideUp('fast');    
  }
  
  function setHeight(a,b){
    return a.outerHeight(true) + b.outerHeight(true);
  }

var gridCells = function() {
  $('.grid-cell a').on('click', function(e) {
  	e.preventDefault();
    
    var activeCell, expander, link, content;
    
    activeCell = $(this).parent();
    expander = $(this).siblings('.expander');
		link = $(this).children('.caption').attr('href');
		// content = gridContainer.getPage(link);

    activeCell.addClass('active').css({'height': setHeight(activeCell, expander)});
    expander.slideDown('fast');
		// gridContainer.update(content);
		// gridContainer.open();    
  })
    .mouseenter(function(e){
	    e.preventDefault();
	    $(this).children('.caption').slideDown('slow');
  })
    .mouseleave(function(e){
	    e.preventDefault();
	    $(this).children('.caption').slideUp('slow');  
  });
  
  $('.grid-cell .close').on('click', function(e){
    e.preventDefault();
    collapseAll();  
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

// Should this be in doc.ready?
$(window).resize(function() {
  collapseAll();
});

$(document).ready(function(){

	slideItem();
	gridCells();
	contactVal();

	$('#intro i').after('<span>line of code</span>');

	// $('.grid-cell').on('click', '.popup-navigation', function(){
	// 	$('.popup-singlePageInline').remove();
	// 	$('.singlePageInline-active').removeClass('singlePageInline-active');
	// });

	var itemHeight = $('#testimonials .item').outerHeight();
	$('#testimonials .wrapper').css('height', itemHeight);

});
