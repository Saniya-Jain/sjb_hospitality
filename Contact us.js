function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }

function validateForm() {
    var name = document.forms.contactForm.name.value;
    var password = document.forms.contactForm.password.value;
    var email = document.forms.contactForm.email.value;
    var country = document.forms.contactForm.country.value;
    var gender = document.forms.contactForm.gender.value;
    var nameErr = (emailErr = passwordErr = countryErr = genderErr = true);

    //Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
      } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
          printError("nameErr", "Please enter a valid name");
        } else {
          printError("nameErr", "");
          nameErr = false;
        }
      }

      if ((nameErr || emailErr || passwordErr || countryErr || genderErr) == true) {
        // console.log(nameErr, emailErr, passwordErr, countryErr, genderErr);
        return false;
      } else {
        // Creating a string from input data for preview
        console.log("done");
        var dataPreview =
          "You've entered the following details: \n" +
          "Full Name: " +
          name +
          "\n" +
          "Email Address: " +
          email +
          "\n" +
          "Password: " +
          password +
          "\n" +
          "Occupation: " +
          country +
          "\n" +
          "Do you like Music: " +
          gender +
          "\n";
  
        alert(dataPreview);
      }
    }
  