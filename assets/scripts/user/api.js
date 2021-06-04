const config = require('./../config.js')
const store = require('./../store')

// This is my api call for sign-in from the client
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

// This is my api call for sign-up from the client
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

// This is my api call for sign-out from the client
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

// This is my api call for change password from the client
const changePassword = (data) => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data
  })
}

module.exports = {
  signIn,
  signUp,
  signOut,
  changePassword
}
