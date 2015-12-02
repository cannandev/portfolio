//http://stackoverflow.com/questions/29543733/how-validate-the-formspree-with-jquery-validation

(function() {

	var contactForm = $('#contactForm'), 
			messages = $('#messages');
	// VALIDATE FORM
	// contactForm.validate(function(){
	// validate fields here;
	// return false;
	// });
	contactForm.submit(function(e) {
	  e.preventDefault();
	  //if validate() returns true, do the following...
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
          messages.text('Oops, there was an error. See below fields.');
      }
	  });
	});
})();