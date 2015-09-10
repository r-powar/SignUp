$(document).ready(function(){
	
	/*TODO 
		Modernizer for date type
		Center main div
	*/
	var validity = false,
		validField = false;
	$('#inputEmail').on('blur', function(){
		validField = signUp.usernameValid(validity);
	});

	$('#inputPassword').on('blur', function(){
		validField = signUp.passwordValidity(validity);
	});

	$('#inputConfirmPassword').on('blur', function(){
		validField = signUp.cnfrmPassword(validity);
	});

	$('#inputFirstName').on('blur', function(){
		validField = signUp.nameValidity(validity);
	});

	$('#inputLastName').on('blur', function(){
		signUp.lastNameField();
	});

	$('#inputDOB').on('blur', function(){
		validField = signUp.checkDOB(validity);
	});


	$("form").submit(function(event){
		var formChildrenAncestor = $(this).find('input').parent().parent().not('.inputLastName'),
			formChildren = $(this).find('input').not('#inputLastName');
		formChildren.each(function(i){
			if(formChildren.eq(i).val() == ""){
				validField = false;
			}
		});

		if(!validField){
			formChildrenAncestor.each(function(i){
				formChildrenAncestor.eq(i).addClass('has-error')
			});
			event.preventDefault();
		}else{
			signUp.convertDate($('#inputDOB').val());
		}
	});
}); 

var signUp = {

	usernameValid: function(validity){
		var emailValue = $('#inputEmail').val(),
			pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i),
			regexVal = pattern.test(emailValue);
		if(emailValue == "" || !regexVal){
			$('.inputEmail').removeClass("has-success").addClass("has-error");
		}else{
			validity = true
			$('.inputEmail').removeClass("has-error").addClass("has-success");
		}

		return validity;
	},

	passwordValidity: function(validity){
		var passwordVal = $('#inputPassword').val();

		if(passwordVal == ""){
			$('.inputPassword').addClass("has-error").removeClass("has-success");
		}else if(passwordVal.length < 6){
			$('.inputPassword').addClass("has-error").removeClass("has-success");
			$('#inputPassword').attr("placeholder", "Password must be at least 6 characters");
		}else{
			validity = true;
			$('.inputPassword').addClass("has-success").removeClass("has-error");
		}

		return validity;
	},

	cnfrmPassword: function(validity){
		var confirmPassVal = $('#inputConfirmPassword').val(),
			passwordVal = $('#inputPassword').val();

		if(confirmPassVal == "" || passwordVal != confirmPassVal){
			$('.inputConfirmPassword').addClass("has-error").removeClass("has-success");
			$('#inputConfirmPassword').attr("placeholder", "Password did not match");
		}else{
			validity = true;
			$('.inputConfirmPassword').addClass("has-success").removeClass("has-error");
		}

		return validity;
	},

	nameValidity: function(validity){
		var firstName = $('#inputFirstName').val(),
			pattern = new RegExp(/^[a-zA-Z]*$/),
			regexVal = pattern.test(firstName);

		if(firstName == "" || !regexVal){
			$('.inputFirstName').addClass("has-error").removeClass("has-success");
		}else if(!regexVal){
			$('.inputFirstName').addClass("has-error").removeClass("has-success");
			$('#inputFirstName').attr("placeholder", "Only letters for this field");
		}else{
			validity = true;
			$('.inputFirstName').addClass("has-success").removeClass("has-error");
		}

		return validity;
	},

	lastNameField: function(){
		var lastName = $('#inputLastName').val();

		if(lastName){
			$('.inputLastName').addClass("has-success");
		}
	},

	checkDOB: function(validity){
		var dateOfBirth = $('#inputDOB').val(),
			today = new Date(),
			birthdate = new Date(dateOfBirth),
			age = today.getFullYear() - birthdate.getFullYear(),
			month = today.getMonth() - birthdate.getMonth();

		if (month < 0 || (month == 0 && today.getDate() < birthDate.getDate())) {
        	age--;
    	}

    	if(dateOfBirth == "" || (age < 14 || age > 150)){
    		$('.inputDOB').addClass("has-error").removeClass("has-success");
    	}else{
    		validity = true;
    		$('.inputDOB').addClass("has-success").removeClass("has-error");
    	}

    	return validity;
	},

	convertDate: function(dateOfBirth){
		var date = new Date(dateOfBirth);
		return date.toISOString();
	}

}