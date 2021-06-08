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
  console.log('successfully signed in')
  $('#message').text('successfully signed in')
  $('#signIn-Form').trigger('reset')
  $('#signIn-Section').hide()
  store.user = res.user
  console.log(store.user)

  $('#signOut').show()
  $('#changePW').show()
  $('#showCreate').show()
  $('#user').show()
  $('#expenseBoard').show()
  $('#right').show()
}

const onSignInFailure = () => {
  console.log('Error signing in')
  $('#message').text('Error signing in')
}

const onSignUpSuccess = () => {
  console.log('successfully signed up')
  $('#message').text('Successfully signed up')
  $('#signUp-Form').trigger('reset')
  $('#signUp-Section').hide()
  $('#signIn-Section').show()
}

const onSignUpFailure = () => {
  console.log('Error signing up')
  $('#message').text('Error signing up')
}

const onSignOutSuccess = () => {
  console.log('successfully signed out')
  $('#message').text('Successfully Signed out')

  store.user = null
  console.log(store.user)

  onLoad()
  $('#signIn-Section').show()
  $('#expenseBoard').addClass('beforein')
  $('#right').hide()
}

const onChangePWSuccess = () => {
  console.log('successfully changed password')
  $('#message').text('Successfully Changed Password')
  $('#changePW-Section').hide()
  $('#changePW').show()
}

const onChangePWFailure = () => {
  console.log('error changing password, Please try again')
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
