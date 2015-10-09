describe("SignUp fields", function(){
	it("should expect username", function(){
		expect(signUp.usernameValid).toBeDefined();
	});

	it("should expect password", function(){
		expect(signUp.passwordValidity).toBeDefined();
	});

	it("should expect confirmedpassword", function(){
		expect(signUp.cnfrmPassword).toBeDefined();
	});

	it("should expect firstName", function(){
		expect(signUp.nameValidity).toBeDefined();
	});

	it("should expect lastName", function(){
		expect(signUp.lastNameField).toBeDefined();
	});

	it("should expect dateofBirth", function(){
		expect(signUp.checkDOB).toBeDefined();
	});

});

describe("Field values", function(){
	it("should truthy values", function(){
		expect(signUp.usernameValid).not.toBeFalsy();
		expect(signUp.passwordValidity).not.toBeFalsy();
		expect(signUp.checkDOB()).not.toBeFalsy();
		expect(signUp.cnfrmPassword()).not.toBeFalsy();
		expect(signUp.nameValidity).not.toBeFalsy();

	});
});

describe("A spy for username", function(){
	var value;
	beforeEach(function(){
		spyOn(signUp, 'usernameValid').and.returnValue(false);
		signUp.usernameValid(false);
		value = signUp.usernameValid();
	});

	it('spy was called', function(){
		expect(signUp.usernameValid).toHaveBeenCalled();
	});

	it('tracks all the arguments of its call', function(){
		expect(signUp.usernameValid).toHaveBeenCalledWith(false);
	});

	it('when called', function(){
		expect(value).toEqual(false);
	});
});

describe("A spy for password", function(){
	var value;
	beforeEach(function(){
		spyOn(signUp, 'passwordValidity').and.returnValue(false);
		signUp.passwordValidity(false);
		value = signUp.passwordValidity();
	});

	it('spy was called', function(){
		expect(signUp.passwordValidity).toHaveBeenCalled();
	});

	it('tracks all the arguments of its call', function(){
		expect(signUp.passwordValidity).toHaveBeenCalledWith(false);
	});

	it('when called', function(){
		expect(value).toEqual(false);
	});
});

describe("A spy for confirmpassword", function(){
	var value;
	beforeEach(function(){
		spyOn(signUp, 'cnfrmPassword').and.returnValue(false);
		signUp.cnfrmPassword(false);
		value = signUp.cnfrmPassword();
	});

	it('spy was called', function(){
		expect(signUp.cnfrmPassword).toHaveBeenCalled();
	});

	it('tracks all the arguments of its call', function(){
		expect(signUp.cnfrmPassword).toHaveBeenCalledWith(false);
	});

	it('when called', function(){
		expect(value).toEqual(false);
	});
});

describe("A spy for firstname", function(){
	var value;
	beforeEach(function(){
		spyOn(signUp, 'nameValidity').and.returnValue(false);
		signUp.nameValidity(false);
		value = signUp.nameValidity();
	});

	it('spy was called', function(){
		expect(signUp.nameValidity).toHaveBeenCalled();
	});

	it('tracks all the arguments of its call', function(){
		expect(signUp.nameValidity).toHaveBeenCalledWith(false);
	});

	it('when called', function(){
		expect(value).toEqual(false);
	});
});

describe("A spy for dateofBirth", function(){
	var value;
	beforeEach(function(){
		spyOn(signUp, 'checkDOB').and.returnValue(false);
		signUp.checkDOB(false);
		value = signUp.checkDOB();
	});

	it('spy was called', function(){
		expect(signUp.checkDOB).toHaveBeenCalled();
	});

	it('tracks all the arguments of its call', function(){
		expect(signUp.checkDOB).toHaveBeenCalledWith(false);
	});

	it('when called', function(){
		expect(value).toEqual(false);
	});
});
