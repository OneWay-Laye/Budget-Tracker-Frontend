const store = require('./../store')

const onLoad = () => {
  $('#signUp-Section').hide()
  $('#changePW-Section').hide()
  $('#user').hide()
  $('#newExpense-Section').hide()
  $('#showCreate').hide()
  $('#expenseBoard').hide()
  $('#right').hide()
}

const onSignInSuccess = (res) => {
  $('#message').text('Successfully Signed in')
  $('#signIn-Form').trigger('reset')
  $('#signIn-Section').hide()
  $('#signIn-Form').trigger('reset')
  store.user = res.user

  $('#signOut').show()
  $('#changePW').show()
  $('#showCreate').show()
  $('#user').show()
  $('#expenseBoard').show()
  $('#right').show()
}

const onSignInFailure = () => {
  $('#message').text('Error signing in')
}

const onSignUpSuccess = () => {
  $('#message').text('Successfully signed up')
  $('#signUp-Form').trigger('reset')
  $('#signUp-Section').hide()
  $('#signIn-Section').show()
}

const onSignUpFailure = () => {
  $('#message').text('Error signing up')
}

const onSignOutSuccess = () => {
  $('#message').text('Successfully Signed out')

  store.user = null

  onLoad()
  $('#signIn-Section').show()
  $('#expenseBoard').addClass('beforein')
  $('#right').hide()
}

const onChangePWSuccess = () => {
  $('#message').text('Successfully Changed Password')
  $('#changePW-Section').hide()
  $('#changePW').show()
  $('#changePW-Section').trigger('reset')
}

const onChangePWFailure = () => {
  $('#message').text('Error changing password, Please try again')
}

module.exports = {
  onLoad,
  onSignInSuccess,
  onSignInFailure,
  onSignUpSuccess,
  onSignUpFailure,
  onSignOutSuccess,
  onChangePWSuccess,
  onChangePWFailure
}
