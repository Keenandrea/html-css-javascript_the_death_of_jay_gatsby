function validateController(){ 
if(
validateUserName() &&  
validatePassword() &&
validateRepeatPassword() &&
validateFirstname() &&
validateLastName() &&
validateAddress1() &&
validateAddress2() &&
validateCity() &&
validateState() &&
formatZipCode() &&
validateZipCode() &&
validateTelephone() &&
validateEmail() &&
validateGender() &&
validateMaritalStatus() &&
validateDateOfBirth()
)
return true;

else
return false;
}


//=========================================================//
//ENTRY REQUIREMENTS=======================================//
//=========================================================//
function validateUserName(){
	var userNameVariable = document.getElementById("Username");
	
	if (userNameVariable){
		var nameValue = userNameVariable.value;
		if (nameValue.length == 0)
		{
			userNameVariable.style.border = "2px solid #ff2100";
			alert("Required field");
			return false;
		}
		else if (nameValue.length < 6 || nameValue.length > 10)
		{
			userNameVariable.style.border = "2px solid #ff2100";
			alert("Username requires 6-10 characters.");
			return false;
		}
		else
		{
			userNameVariable.style.border = "2px solid #54F8FF";
			return true;
		}
	}
}

function validatePassword(){
	var passwordVariable = document.getElementById("Password");
	
	if (passwordVariable){
		var passValue = passwordVariable.value;
		if (passValue.length == 0)
		{
			passwordVariable.style.border = "2px solid #ff2100";
			alert("Required field");
			return false;

		}
		else if (passValue.length < 8 || passValue.length > 50)
		{
			passwordVariable.style.border = "2px solid #ff2100";
			alert("Username requires 8-50 characters.");
			return false;
		}
		else
		{
			var index = passValue.search(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
			if (index > -1){
				passwordVariable.style.border = "2px solid #54F8FF";
				return true;
			}
			else{
				passwordVariable.style.border = "2px solid #ff2100";
				alert("Requires an uppercase letter, a lowercase letter, a digit, and a special character.");
				return false;
			}
		}
	}
}

function validateRepeatPassword()
{
	var passwordVariable = document.getElementById("Password");
	var repeatPasswordVariable = document.getElementById("Repeat Password");
	
	if (usageErrRPswd){
		if (passwordVariable.value != repeatPasswordVariable.value){
			repeatPasswordVariable.style.border = "2px solid #ff2100";
			alert("Password does not match the previous input.");
			return false;
		}
		else {
			repeatPasswordVariable.style.border = "2px solid #54F8FF";
			return true;
		}
	}
}

function validateFirstname(){
	var firstNameVariable = document.getElementById("Firstname");
	
	if (firstNameVariable){
		var firstNameValue = firstNameVariable.value;
		if (firstNameValue.length > 50){
			firstNameVariable.style.border = "2px solid #ff2100";
			alert("Max length 50 characters.");
			return false;
		}
		else if (firstNameValue.length == 0){
			firstNameVariable.style.border = "2px solid #ff2100";
			alert("Required field.");
			return false;
		}
		else{
			firstNameVariable.style.border = "2px solid #54F8FF";
			return true;
		}
	}
}

function validateLastname(){
	var lastNameVariable = document.getElementById("Lastname");

	if (lastNameVariable){
		var lastNameValue = lastNameVariable.value;
		if (lastNameValue.length > 50){
			lastNameVariable.style.border = "2px solid #ff2100";
			alert("Max length 50 characters.");
			return false;
		}
		else if (lastNameValue.length == 0){
			lastNameVariable.style.border = "2px solid #ff2100";
			alert("Required field.");
			return false;
		}
		else{
			lastNameVariable.style.border = "2px solid #54F8FF";
			return true;
		}
	}
}

function validateAddress1(){
	var addressVariable = document.getElementById("Address1");
	
	if (addressVariable){
		var addressValue = addressVariable.value;
		if (addressValue.length == 0)
		{
			addressVariable.style.border = "2px solid #ff2100";
			alert("Required Field");
			return false;
		}
		else if (addressValue.length > 100)
		{
			addressVariable.style.border = "2px solid #ff2100";
			alert("Max length 100 characters");
			return false;
		}
		else
		{
			addressVariable.style.border = "2px solid #54F8FF";
			return true;
		}
	}	
}

function validateAddress2(){
	var addressVariable = document.getElementById("Address2");
	
	if (addressVariable){
		var addressValue = addressVariable.value;
		if (addressValue.length > 100)
		{
			addressVariable.style.border = "2px solid #ff2100";
			alert("Max length 100 characters");
			return false;
		}
		else
		{
			addressVariable.style.border = "2px solid #54F8FF";
			return true;
		}
	}
}


function validateCity(){
	var cityVariable = document.getElementById("City");
	
	if (cityVariable){
		var cityValue = cityVariable.value;
		if (cityValue.length == 0){
			cityVariable.style.border = "2px solid #ff2100";
			alert("Required field");
			return false;
		}
		else if (cityValue.length > 50)
		{
			cityVariable.style.border = "2px solid #ff2100";
			alert("Max length 50 character.");
			return false;
		}
		else {
			cityVariable.style.border = "2px solid #54F8FF";
			return true;
		}
	}
}

function validateState(){
	var stateVariable = document.getElementById("State");
	
	if(stateVariable){
		var stateValue = stateVariable.value;
		if (stateValue == "null"){
			stateVariable.style.border = "2px solid #ff2100";
			alert("Please select an option.");
			return false;
		}
		else{
			stateVariable.style.border = "2px solid #54F8FF";
			return true;
		}
	}
}

function formatZipCode(){
	var zipCodeVariable = document.getElementById("Zip Code");
	
	if (zipCodeVariable){
		var zipCodeValue = zipCodeVariable.value;
		var zipLength = zipCodeValue.length;
		if (zipLength > 5){
			zipCodeVariable.value =  zipCodeValue + "-";
		}
	}
}

function validateZipCode(){
	var zipCodeVariable = document.getElementById("Zip Code");

	if (zipCodeVariable){
		var zipCodeValue = zipCodeVariable.value;
		if (zipCodeValue == 0)
		{
			zipCodeVariable.style.border = "2px solid #ff2100";
			alert("Required Field.");
			return false;
		}
		else if (zipCodeValue.length < 5 || zipCodeValue.length > 10)
		{
			zipCodeVariable.style.border = "2px solid #ff2100";
			alert("Zip Code must be between 5 and 10 digits long.");
			return false;
		}
		else{
			zipCodeVariable.style.border = "2px solid #54F8FF";
			return true;
		}
	}
}

function validateTelephone(){
	var telephoneVariable = document.getElementById("Telephone");

	if (telephoneVariable){
		var telephoneValue = telephoneVariable.value;
		if (telephoneValue == 0)
		{
			telephoneVariable.style.border = "2px solid #ff2100";
			alert("Required Field.");
			return false;
		}
		else if (telephoneValue.length > 12)
		{
			telephoneVariable.style.border = "2px solid #ff2100";
			alert("Phone number must be less than 12 characters.");
			return false;
		}
		else{
			zipCodeVariable.style.border = "2px solid #54F8FF";
			return true;
		}
	}
}

function validateEmail(){
	var emailVariable = document.getElementById("Email");

	if (emailVariable){
		var emailValue = emailVariable.value;
		if (emailValue == 0)
		{
			emailVariable.style.border = "2px solid #ff2100";
			alert("Required Field.");
			return false;
		}
		else
		{
			emailVariable.style.border = "2px solid #54F8FF";
			return true;
		}
	}
}

function validateGender(){
	var genderVariable = document.getElementById("Gender");

	if (genderVariable){
		var genderValue = genderVariable.value;
		if (genderValue == 0)
		{
			genderVariable.style.border = "2px solid #ff2100";
			alert("Required Field.");
			return false;
		}
		else if (genderValue.length > 50)
		{
			genderVariable.style.border = "2px solid #ff2100";
			alert("Input must be less than 50 characters");
			return false;
		}
		else{
			genderVariable.style.border = "2px solid #54F8FF";
			return true;
		}
	}
}


function validateMaritalStatus(){
	var maritalStatusVariable = document.getElementById("Marital Status");

	if (maritalStatusVariable){
		var maritalStatusValue = maritalStatusVariable.value;
		if (maritalStatusValue == 0)
		{
			maritalStatusVariable.style.border = "2px solid #ff2100";
			alert("Required Field.");
			return false;
		}
		else if (maritalStatusValue.length > 50)
		{
			maritalStatusVariable.style.border = "2px solid #ff2100";
			alert("Input must be less than 50 characters.");
			return false;
		}
		else{
			maritalStatusVariable.style.border = "2px solid #54F8FF";
			return true;
		}
	}
}

function validateDateOfBirth(){
	var dateOfBirthVariable = document.getElementById("Date of Birth");

	if (dateOfBirthVariable){
		var dateOfBirthValue = dateOfBirthVariable.value;
		if (dateOfBirthValue == 0)
		{
			dateOfBirthVariable.style.border = "2px solid #ff2100";
			alert("Required Field.");
			return false;
		}
		else{
			dateOfBirthVariable.style.border = "2px solid #54F8FF";
			return true;
		}
	}
}

//=========================================================//
//=========================================================//



