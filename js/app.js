//http://stackoverflow.com/questions/29543733/how-validate-the-formspree-with-jquery-validation

(function() {

	var contactForm = $('#contactForm'), 
			messages = $('#messages');

	var contactValidate = function(contactform){
		var status = true;
		if($('.form-control.name').val().length === 0){
			$('#errorContactName').text('Sorry, I didn\'t catch your name.');
			status = false;
		}
		if($('.form-control.email').val().length === 0){
			$('#errorContactEmail').text('Do tell your email again.');
			status = false;
		}
		if($('.form-control.message').val().length === 0){
			$('#errorContactMessage').text('Come on. Type a little message.');
			status = false;
		}
		return status;
	};

	contactForm.submit(function(e) {
	  e.preventDefault();
	  if(contactValidate(this)){
		  // $.ajax({
	   //    url: '//formspree.io/me@cannanso.com',
	   //    method: 'POST',
	   //    data: $(this).serialize(),
	   //    dataType: 'json',
	   //    beforeSend: function() {
	   //        messages.text('Sending message...');
	   //    },
	   //    success: function(data) {
	   //        messages.text('Success! Thank you. Talk to you soon.');
	   //    },
	   //    error: function(err) {
	   //        messages.text('Oops, there was an error connecting to formspree.io.');
	   //    }
		  // });
			messages.text('Test success!');
	  }
	  else {
	  	messages.text('Oops, check the fields below.');
	  }

	});
})();