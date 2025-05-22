const form = document.querySelector('form')
const usernameInput = document.getElementById('username')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const confirmPasswordInput = document.getElementById('confirmPassword')
const submitBtn = document.getElementById('submit-btn')

const usernameError = document.getElementById('usernameError')
const emailError = document.getElementById('emailError')
const passwordError = document.getElementById('passwordError')
const confirmPasswordError = document.getElementById('confirmPasswordError')

// localStorage
window.addEventListener('DOMContentLoaded', () => {
  // retrieve saved data
  const savedUsername = localStorage.getItem('username')

  if (savedUsername) {
    usernameInput.value = savedUsername
  }
})
usernameInput.addEventListener('input', () => {
  // save to local storage
  localStorage.setItem('username', usernameInput.value)
})

// user name validation
usernameInput.addEventListener('input', e => {
  if (usernameInput.validity.tooShort) {
    usernameInput.setCustomValidity('Username should be more than 6 Characters')
  } else if (usernameInput.validity.valueMissing) {
    usernameInput.setCustomValidity('Username required for registration')
  } else {
    usernameInput.setCustomValidity('') // clear custom error
  }

  // display custom error message or clear it
  usernameError.textContent = usernameInput.validationMessage
})

// email validation
emailInput.addEventListener('input', e => {
  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity(
      'Please enter a valid email address. e.g.: j_doe21@hotmail.com'
    )
  } else if (emailInput.validity.valueMissing) {
    emailInput.setCustomValidity('Email required for registration')
  } else {
    emailInput.setCustomValidity('') // clear custom error
  }

  // display custom error message or clear it
  emailError.textContent = emailInput.validationMessage
})

// password validation tE$t238lAb
passwordInput.addEventListener('input', e => {
  if (passwordInput.validity.tooShort) {
    passwordInput.setCustomValidity('Password should be more than 8 Characters')
  } else if (passwordInput.validity.valueMissing) {
    passwordInput.setCustomValidity('Password required for registration')
  } else {
    passwordInput.setCustomValidity('') // clear custom error
  }

  // display custom error message or clear it
  passwordError.textContent = passwordInput.validationMessage
})

// password confirmation
function validatePassword () {
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.setCustomValidity('Password does not match')
  } else {
    confirmPasswordInput.setCustomValidity('') // clear custom error
  }

  // display custom error message or clear it
  confirmPasswordError.textContent = confirmPasswordInput.validationMessage
}

// form submission
form.addEventListener('submit', e => {
  e.preventDefault()

  // Define the validateInput function
  function validateInput (inputElement, errorElement) {
    // Add your validation logic here
    if (inputElement.value.trim() === '') {
      errorElement.textContent = 'This field is required.'
      return false
    } else {
      errorElement.textContent = ''
      return true
    }
  }
  const registered = document.getElementById('registration-complete')
  const isUsernameValid = validateInput(usernameInput, usernameError)
  const isEmailValid = validateInput(emailInput, emailError)
  const isPasswordValid = validateInput(passwordInput, passwordError)
  const isConfirmPasswordValid = validatePassword()

  const allValid =
    isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid

  if (allValid) {
    localStorage.setItem('username', usernameInput.value)
    registered.textContent = 'Registration successful!'
    registered.style.color = 'green'
    form.reset()
  } else {
    registered.textContent = 'Please correct the highlighted fields.'
    registered.style.color = 'red'
    const firstInvalid = form.querySelector('.invalid')
    if (firstInvalid) firstInvalid.focus()
  }
})
