(function() {
  let form = document.querySelector('#contact-form');
  let emailInput = document.querySelector('#contact-email');
  let telephoneInput = document.querySelector('#contact-tel');
  
  function showErrorMessage(input, message) {
    let container = input.parentElement; // The .input-wrapper
    
    // Remove an existing error
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }
    
    // Now add the error, if the message is not empty
    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }
  
  function validateEmail() {
    let value = emailInput.value;
    
    if (!value) {
      showErrorMessage(emailInput, 'E-mail is a required field.');
      return false;
    }
    //when there is no @ show the error
    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
      return false;
    }
    
    showErrorMessage(emailInput, null);
    return true;
  }
  
  function validateTelephone() {
    let value = telephoneInput.value;
    // if there is no value show the error
    if (!value) {
      showErrorMessage(telephoneInput, 'mobile number is a required field!');
      return false;
    }
    // if the length is less then 12 nr. show the error (how to ignore ‘ ‘???) (how to implement if > 12 then error)
    if (value.length < 12) {
      showErrorMessage(telephoneInput, 'You must enter a valid mobile number!');
      return false;
    }
    
    showErrorMessage(telephoneInput, null);
    return true;
  }

  //Now, when the user starts typing, the validation will be updated in real time.
  emailInput.addEventListener('input', validateEmail);
  telephoneInput.addEventListener('input', validateTelephone);
})();