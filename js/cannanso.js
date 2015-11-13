var gridCells = {
	anchor: '',
	expander: '',
	setPage: function(url) {
		$.ajax({
		    url: url,
		    type: 'GET',
		    dataType: 'html',
		    timeout: 5000
		})
	  .done(function (result) {
	      gridCells.update(result);
	  })
	  .fail(function () {
	      gridCells.update("Error! Please refresh the page!");
	  });
	},
	update: function(content) {
		this.close();
		this.expander = $('<div id="expander"></div>').appendTo($(this.anchor).parent());
		this.expander.html(content);
		this.expander.prepend('<a href="#" class="close">Close <i class="fa fa-times-circle-o"></i></a>');
		this.expand();
	},
	expand: function() {    
    var activeCell = $(this.anchor).parent(), 
    		expander = this.expander;

    activeCell.addClass('expanded');
    activeCell.css({'height': this.setHeights(activeCell, expander)});
    expander.slideDown(400);
	},
	setHeights: function(a,b) {
console.log('b:' + b.outerHeight(true));
		return a.outerHeight(true) + b.outerHeight(true);
	},
	positionPreview: function() {
		//scrollTop
		console.log('scroll to position the preview in the right place');
	},
	close: function(){
    $('.grid-cell.expanded').removeClass('expanded').css({'height': 'auto'});
    $('#expander').slideUp(400);
    $('#expander').remove();
	},
	init: function() {
	  $('.grid-cell a').on('click', function(e) {
	  	e.preventDefault();
			gridCells.anchor = this;
			gridCells.setPage(this.getAttribute('href'));
	  })
	  .mouseenter(function(e){
	    e.preventDefault();
	    $(this).children('.caption').slideDown('slow');
	  })
	  .mouseleave(function(e){
	    e.preventDefault();
	    $(this).children('.caption').slideUp('slow');  
	  });
	  
	  $('.grid-cell').on('click', ' .close', function(e){
	    e.preventDefault();
	    gridCells.close();  
	  });
	}
};

var slideItem = function() {
	var itemHeight = $('#testimonials .item').outerHeight();
	$('#testimonials .wrapper').css('height', itemHeight);

 	$('#testimonials .next').click(function(){
 		var activeItem = $('#testimonials .active'),
 				nextItem = activeItem.next();

 		if(nextItem.length === 0) {
 			nextItem = $('.item').first();
 		}
 		activeItem.fadeOut(600).removeClass('active');
 		nextItem.fadeIn(600).addClass('active');
 	});

 	$('#testimonials .prev').click(function(){
 		var activeItem = $('#testimonials .active'),
 				prevItem = activeItem.prev();

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
  gridCells.close();
});

$(document).ready(function(){

	gridCells.init();
	slideItem();
	contactVal();

	$('#intro i').after('<span>line of code</span>');

});
