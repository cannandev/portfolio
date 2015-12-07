//http://stackoverflow.com/questions/29543733/how-validate-the-formspree-with-jquery-validation

(function() {

	var contactForm = $('#contactForm');

	function validateField(input){
		var status = true, 
				errorMessage;

		//Set an error message and status for the field.
		if((input).val().length === 0){
			status = false;
			errorMessage = 'Uh-oh. This field needs a value.';
		} else if ((input).val() === ' ') {
		    errorMessage = 'Aww. This field needs more than a space.';
		    status = false;
		} else if ((input).val() === '  ') {
		    errorMessage = 'Woops. This field needs more than spaces.';
		    status = false;
		}


		if(status === false){
			input.after('<span class="error">' + errorMessage + '</span>');
		}
		return status;
	}

	contactForm.submit(function(e) {
	  e.preventDefault();

	  //Clear previous errors
	  $(this).find('span.error').remove();

	  //Check each field before sending form request
	  var nameStatus = validateField($('.form-control.name'));
	  var emailStatus = validateField($('.form-control.email'));
	  var messageStatus = validateField($('.form-control.message'));

	  //Only send the request if all fields validate
	  if(nameStatus && emailStatus && messageStatus){

		  $.ajax({
	      url: '//formspree.io/me@cannanso.com',
	      method: 'POST',
	      data: $(this).serialize(),
	      dataType: 'json',
	      success: function(data) {
	          contactForm.text('Success! Thanks and talk to you soon.');
	      },
	      error: function(err) {
	          contactForm.text('Oops, received the following error: ' + err);
	      }
		  });
	  }

	});
})();