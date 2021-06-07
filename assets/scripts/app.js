'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userEvents = require('./user/events')
const expenseEvents = require('./expenses/events')

$(() => {
  // your JS code goes here
  // run when the page loads
  $(document).ready(userEvents.onPageLoad)

  // User account interactions
  $('#signIn-Form').on('submit', userEvents.onSignIn)
  $('#signUp-Form').on('submit', userEvents.onSignUp)
  $('#signOut').on('click', userEvents.onSignOut)
  $('#changePW-Form').on('submit', userEvents.onSubmitChangePassword)
  $('#changePW').on('click', userEvents.onShowChangePW)
  $('#signIn-Section').on('click', '.showSignUp', userEvents.onShowSignUp)
  $('#signUp-Section').on('click', '.showSignIn', userEvents.onShowSignIn)

  // Expense interactions
  $('#newExpense').on('submit', expenseEvents.onCreateExpense)
  $('#index-Expenses').on('click', expenseEvents.onIndexExpenses)
  $('#findExpense-Form').on('submit', expenseEvents.onShowExpense)
  $('#expenseBoard').on('click', '.delete', expenseEvents.onDeleteExpense)
  $('#expenseBoard').on('click', '.showUpdate', expenseEvents.onloadUpdate)
  $('#expenseBoard').on('submit', '.perExpenseSection', expenseEvents.onUpdateExpense)
  $('#showCreate').on('click', expenseEvents.onShowCreateForm)
})
