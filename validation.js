function formValidation() {
	var passid1 = document.registration.password;
	var passid2 = document.registration.password2;
	var gender = document.registration.gender;
	var fname = document.registration.f_name;
	var lname = document.registration.l_name;
	var uname = document.registration.username;
	var uadd = document.registration.address;

	var dob = document.registration.bday;
	var uzip = document.registration.zip;
	var uemail = document.registration.email;
	var phone = document.registration.phone;

	/*** local storage ******/
	if (typeof(Storage) !== "undefined"){
	localStorage.setItem("username", uname.value);
	localStorage.setItem("password", passid1);
		
	}

	var ph_f = document.getElementById('f_name');
	if (fname.value === '') {
		alert("Enter First name");
		return false;
	} else if (lname.value === '') {
		alert("Enter Last name");
		return false;

	} else if (gender.value === '') {
		alert("Click on gender");
		return false;

	} else if (dob.value === '') {
		alert("Select DOB");
		return false;
	} // else if (userid_validation(uname, 5, 12)){
	// return false;}
	else if (uname.value.length < 3 || uname.value.length > 10) {
		alert("Enter Username between 3 and 10 characters");
		return false;
	} else if (uzip.value < 6) {
		alert("Postal code must be 6 digits");
		return false;
	} else if (phone.value.length < 10 || phone.value.length > 10) {
		alert("Phone number should be of 10 digits");
		return false;
	} else if (passid1.value === '') {
		alert("Enter password");
		return false;
	} else if (passid1.value.length < 8) {
		alert("Password must be more than 8 characters");
		return false;
	} else if (passid2.value === '') {
		alert("Confirm password");
		return false;
	} else if (passid1.value !== passid2.value) {
		alert("Wrong check");
		return false;
	}
	



	return true;

}


/* i. First Name ii. Last Name
iii. Gender iv. Date of Birth
v. Username vi. Password
vii. Confirm Password viii. Address
ix. Postal Code x. Mobile No.
xi. Email-Id */
/*****local-storage********/
