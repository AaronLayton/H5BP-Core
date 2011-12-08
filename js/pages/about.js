// Page specific code for the About page only
H5BP.addPage('about', function(){
	
	// Log
	H5BP.log('This will only be ran on the about page');
	
	// Other useful code to run
	// Maybe submit the contact form by AJAX
	//$('#contact-form').submit(function(e){
	//	e.preventDefault();
	//	
	//	dataString = $(this).serialize();
	//	
	//	$.ajax({
	//		type: 'POST',
	//		url: '/ajax/contact',
	//		data: dataString,
	//		dataType: 'json',
	//		success: function(data){
	//			$('#formOutput'	).html(data).show().delay(3000).fadeOut('slow');
	//		}
	//	});
	//});
});