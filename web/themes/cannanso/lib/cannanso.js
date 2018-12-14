'use strict';

(function ($) {

	var gridCells = {
		anchor: '',
		expander: '',
		setPage: function setPage(url) {
			$.ajax({
				url: url,
				type: 'GET',
				dataType: 'html',
				timeout: 5000
			}).done(function (result) {
				gridCells.update(result);
			}).fail(function () {
				gridCells.update("Error! Please refresh the page!");
			});
		},
		update: function update(content) {
			this.close();
			this.expander = $('<div id="expander"></div>').appendTo($(this.anchor).parent());
			this.expander.html(content);
			this.expander.prepend('<a href="#" class="close">Close <i class="fa fa-times-circle-o fa-2x"></i></a>');
			this.expand();
		},
		expand: function expand() {
			var activeCell = $(this.anchor).parent(),
			    expander = this.expander,
			    newHeight = this.setHeights(activeCell, expander);

			activeCell.addClass('expanded');

			$(this.anchor).append('<i class="fas fa-caret-up fa-3x"></i>');

			//Only set a height on the active cell for wider screens
			if (window.innerWidth >= 768) {
				activeCell.css({ 'height': newHeight });
			}
			expander.slideDown(400);
		},
		setHeights: function setHeights(a, b) {
			var marginHeight = 16;
			return a.outerHeight(true) + b.outerHeight(true) - marginHeight;
		},
		positionPreview: function positionPreview() {
			//scrollTop
			console.log('scroll to position the preview in the right place');
		},
		close: function close() {
			$('.grid-cell.expanded').removeClass('expanded').css({ 'height': 'auto' });
			$('#expander').slideUp(400);
			$('#expander').remove();
			$('.grid-cell svg[data-icon="caret-up"]').remove();
		},
		init: function init() {
			$('.grid-cell a').on('click', function (e) {
				e.preventDefault();
				gridCells.anchor = this;
				gridCells.setPage(this.getAttribute('href'));
			}).mouseenter(function (e) {
				e.preventDefault();
				$(this).children('.caption').slideDown('slow');
			}).mouseleave(function (e) {
				e.preventDefault();
				$(this).children('.caption').slideUp('slow');
			});

			$('.grid-cell').on('click', ' .close', function (e) {
				e.preventDefault();
				gridCells.close();
			});
		}
	};

	var slideItem = function slideItem() {
		var itemHeight = $('#testimonials .item').outerHeight();
		$('#testimonials .wrapper').css('height', itemHeight);
		$('#testimonials .item').first().addClass('active');
		$('#testimonials .next').click(function () {
			var activeItem = $('#testimonials .active'),
			    nextItem = activeItem.next();

			if (nextItem.length === 0) {
				nextItem = $('.item').first();
			}
			activeItem.fadeOut(600).removeClass('active');
			nextItem.fadeIn(600).addClass('active');
		});

		$('#testimonials .prev').click(function () {
			var activeItem = $('#testimonials .active'),
			    prevItem = activeItem.prev();

			if (prevItem.length === 0) {
				prevItem = $('.item').last();
			}
			activeItem.fadeOut(600).removeClass('active');
			prevItem.fadeIn(600).addClass('active');
		});
	};

	var contactVal = function contactVal() {
		$('#contact form').on('submit', function () {
			$('.form-control').each(function () {
				if (!$(this).val().length) {
					$(this).css('border-color', 'red');
				}
			}).blur(function () {
				if ($(this).val().length) {
					$(this).css('border-color', 'green');
				}
			});
		});
	};

	$(window).resize(function () {
		gridCells.close();
	});
	gridCells.init();
	AOS.init();
	slideItem();
	contactVal();
})(jQuery);