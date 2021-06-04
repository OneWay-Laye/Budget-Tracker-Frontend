const store = require('./../store')

const onLoad = () => {

}

const onSignInSuccess = (res) => {
  console.log('successfully signed in')
  $('#message').text('successfully signed in')
  store.user = res.user
  console.log(store.user)
}

const onSignInFailure = () => {
  console.log('Error signing in')
  $('#message').text('Error signing in')
}

const onSignUpSuccess = () => {
  console.log('successfully signed up')
  $('#message').text('successfully signed up')
}

const onSignUpFailure = () => {
  console.log('Error signing up')
  $('#message').text('Error signing up')
}

const onSignOutSuccess = () => {
  console.log('successfully signed out')
  $('#message').text('successfully signed out')
  store.user = null
  console.log(store.user)
}

const onChangePWSuccess = () => {
  console.log('successfully changed password')
  $('#message').text('successfully changed password')
}

const onChangePWFailure = () => {
  console.log('error changing password, Please try again')
  $('#message').text('error changing password, Please try again')
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
