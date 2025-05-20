const form = document.querySelector('form')
const errorMessage = document.getElementById('error-message')
const registerForm = document.getElementById('registrationForm')

console.dir(form)

const username = form[0]
const email = form[1]
const password = form[2]
const confirmPassword = form[3]

// username validation
username.addEventListener('input', function (e) {
    if (username.validity.tooShort) {
        username.setCustomValidity ('Username must be minimum 6 Characters long')
    } else {
        username.setCustomValidity('') // when valid, clear custom error
    }

    errorMessage.textContent = username.validationMessage
})

// email validation
email.addEventListener('input', function (e) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity(
      'Please ente a valid email address. Ex.: johdoe123@hotmail.com'
    )
  } else if (email.validity.valueMissing) {
    email.setCustomValidity('Email addressed required to establish contact.')
  } else {
    email.setCustomValidity('') // when valid, clears custom error
  }

  errorMessage.textContent = email.validationMessage
  console.log(email.validity)
})

// password checker
password.addEventListener('input', function (e) {
    if (username.validity.tooShort) {
        username.setCustomValidity ('Username must be minimum 6 Characters long')
    } else {
        username.setCustomValidity('') // when valid, clear custom error
    }

    errorMessage.textContent = username.validationMessage
})


// prevent default submission
registerForm.addEventListener('submit', function (e) {
  e.preventDefault() // stops default form submission

  if (!username.validity.valid) {
    alert('Username is required')
    username.focus()
    return // stop further processing if invalid
  } else if (!email.validity.valid) {
    alert('Email addressed is required')
    email.focus()
    return
  } else if (!password.validity.valid) {
    alert('Please create a unique password')
    password.focus()
    return
  } else if (!confirmPassword.validity.valid) {
    alert('Please confirm password')
    confirmPassword.focus()
    return
  }

  // when valid, process form
  const formData = new FormData(registerForm)
  const nameValue = formData.get('username')
  alert('Form has been submitted! Account has been created for: ' + nameValue)
  registerForm.reset() // option to rest the form
})
