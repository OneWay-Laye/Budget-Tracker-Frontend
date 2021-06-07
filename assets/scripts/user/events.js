// This will bring in my API request
const api = require('./api')

// This will bring in my Ui changes
const ui = require('./ui')

// This will bring in user input from fields
const getFormFields = require('./../../../lib/get-form-fields')

const onPageLoad = function (event) {
  ui.onLoad()
}

// This will run whenever a user signs up
const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onShowSignUp = (event) => {
  $('#signIn-Section').hide()
  $('#signUp-Section').show()
  $('#signUp-Section').addClass('col-10')
}

// This will run whenever a user signs up
const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onShowSignIn = (event) => {
  console.log('in SSi')
  $('#signIn-Section').show()
  $('#signUp-Section').hide()
}

const onSignOut = (event) => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
}

const onShowChangePW = (event) => {
  $('#changePW-Section').show()
  $('#changePW').hide()
}

const onSubmitChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.changePassword(data)
    .then(ui.onChangePWSuccess)
    .catch(ui.onChangePWFailure)
}

module.exports = {
  onPageLoad,
  onSignIn,
  onSignUp,
  onSignOut,
  onSubmitChangePassword,
  onShowChangePW,
  onShowSignUp,
  onShowSignIn
}
