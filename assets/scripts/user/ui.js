const store = require('./../store')

const onLoad = () => {
  $('#signUp-Section').hide()
  $('#changePW-Section').hide()
  $('#user').hide()
  $('#newExpense-Section').hide()
  $('#showCreate').hide()
  $('#expenseBoard').hide()
  $('#right').hide()
  $('#left').hide()
}

const onSignInSuccess = (res) => {
  $('#message').text('Successfully Signed in')
  $('#signIn-Form').trigger('reset')
  $('#signIn-Section').hide()
  store.user = res.user
  const token = store.user.token

  $('#signOut').show()
  $('#changePW').show()
  $('#showCreate').show()
  $('#user').show()
  $('#expenseBoard').show()
  $('#right').show()
  $('#left').show()
  return token
}

const onSignInFailure = () => {
  $('#message').text('Error signing in')
  $('#signIn-Form').trigger('reset')
}

const onSignUpSuccess = () => {
  $('#message').text('Successfully signed up')
  $('#signUp-Form').trigger('reset')
  $('#signUp-Section').hide()
  $('#signIn-Section').show()
}

const onSignUpFailure = () => {
  $('#message').text('Error signing up')
  $('#signUp-Form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#message').text('Successfully Signed out')

  store.user = null

  onLoad()
  $('#signIn-Section').show()
  $('#expenseBoard').addClass('beforein')
  $('#right').hide()
  $('#signIn-Form').trigger('reset')
  $('#signUp-Form').trigger('reset')
}

const onChangePWSuccess = () => {
  $('#message').text('Successfully Changed Password')
  $('#changePW-Section').hide()
  $('#changePW').show()
  $('#changePW-Form').trigger('reset')
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
