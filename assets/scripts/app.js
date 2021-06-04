'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userEvent = require('./user/events')


$(() => {
  // your JS code goes here
  // run when the page loads
  $(document).ready(userEvent.onPageLoad)

  // User account interactions interactions
  $('#signIn-Form').on('submit', userEvent.onSignIn)
  $('#signUp-Form').on('submit', userEvent.onSignUp)
  $('#signOut').on('click', userEvent.onSignOut)
  $('#changePW-Form').on('submit', userEvent.onSubChangePassword)
  $('#changePW').on('click', userEvent.onShowChangePW)
})
