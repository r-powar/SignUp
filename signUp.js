$(document).ready(function(){
	//$('.inputEmail').change(signUp.usernameValid);
	$('input').on('blur', function(){
		signUp.usernameValid();
		signUp.passwordValidity();
	});


	$("form").submit(function(event){
		signUp.init();
		console.log('test');
		event.preventDefault();
	});
}); 

var signUp = {
	init: function(){
		this.usernameValid();
		this.passwordValidity();
		this.cnfrmPassword();
		this.nameValidity();
		this.lastNameField();
		this.checkDOB();
		this.convertDate();
	},

	checkValidity:function(){

	},

	usernameValid: function(){
		var emailValue = $('#inputEmail').val(),
			pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i),
			regexVal = pattern.test(emailValue);
		if(emailValue == "" || !regexVal){
			$('.inputEmail').removeClass("has-success").addClass("has-error");
		}else{

			$('.inputEmail').removeClass("has-error").addClass("has-success");
		}
	},

	passwordValidity: function(){
		var passwordVal = $('#inputPassword').val();

		if(passwordVal == ""){
			$('.inputPassword').addClass("has-error").removeClass("has-success");
		}else if(passwordVal.length < 6){
			$('.inputPassword').addClass("has-error").removeClass("has-success");
			$('#inputPassword').attr("placeholder", "Password must be at least 6 characters");
		}else{
			$('.inputPassword').addClass("has-success").removeClass("has-error");
		}
	},

	cnfrmPassword: function(){
		var confirmPassVal = $('#inputConfirmPassword').val(),
			passwordVal = $('#inputPassword').val();

		if(confirmPassVal == "" || passwordVal != confirmPassVal){
			$('.inputConfirmPassword').addClass("has-error");
			$('#inputConfirmPassword').attr("placeholder", "Password did not match");
		}else{
			$('.inputConfirmPassword').addClass("has-success");
		}

	},

	nameValidity: function(){
		var firstName = $('#inputFirstName').val(),
			pattern = new RegExp(/^[a-zA-Z]*$/),
			regexVal = pattern.test(firstName);

		if(firstName == ""){
			$('.inputFirstName').addClass("has-error");
		}else if(!regexVal){
			$('.inputFirstName').addClass("has-error");
			$('#inputFirstName').attr("placeholder", "Only letters for this field");
		}else{
			$('.inputFirstName').addClass("has-success");
		}
	},

	lastNameField: function(){
		var lastName = $('#inputLastName').val();

		if(lastName){
			$('.inputLastName').addClass("has-success");
		}
	},

	checkDOB: function(){
		var dateOfBirth = $('#inputDOB').val(),
			today = new Date(),
			birthdate = new Date(dateOfBirth),
			age = today.getFullYear() - birthdate.getFullYear(),
			month = today.getMonth() - birthdate.getMonth();

		if (month < 0 || (month == 0 && today.getDate() < birthDate.getDate())) {
        	age--;
    	}

    	if(dateOfBirth == "" || (age < 14 || age > 150)){
    		$('.inputDOB').addClass("has-error");
    	}else{
    		$('.inputDOB').addClass("has-success");
    	}
	},

	convertDate: function(dateOfBirth){
		var date = new Date(dateOfBirth);
		return date.toISOString();
	}

}