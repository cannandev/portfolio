//http://stackoverflow.com/questions/29543733/how-validate-the-formspree-with-jquery-validation

(function() {

	var contactForm = $('#contactForm'), 
			messages = $('#messages');

	contactForm.submit(function(e) {
	  e.preventDefault();
	  $.ajax({
      url: '//formspree.io/me@cannanso.com',
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      beforeSend: function() {
          messages.text('Sending message...');
      },
      success: function(data) {
          messages.text('Success! Thank you. Talk to you soon.');
      },
      error: function(err) {
          messages.text('Oops, there was an error connecting to formspree.io.');
      }
	  });
	});
})();