const store = require('./../store')

const onExpenseCreationSuccess = (res) => {
  console.log('successfully created expense')
  $('#message').text('Successfully Created Expense')
  store.expense = res.expense
  console.log(store.expense)
}

const onExpenseCreationFailure = (res) => {
  console.log('Error creating expense')
  $('#message').text('Error Creating Expense')
}

module.exports = {
  onExpenseCreationSuccess,
  onExpenseCreationFailure
}
