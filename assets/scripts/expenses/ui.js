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

const onIndexExpensesSuccess = (res) => {
  console.log(res)
  let expenseHtml = ''

  res.forEach(expense => {
    expenseHtml += `
    <h4>${expense.company}</h4>
    <h2>$${expense.amount}</h2>
    <p>Date ${expense.due}</p>
    <p>ID: ${expense._id}</p>
    `
  })
  $('#expenseBoard').html(expenseHtml)
}

const onIndexExpensesFailure = (res) => {
  console.log(res)
}

module.exports = {
  onExpenseCreationSuccess,
  onExpenseCreationFailure,
  onIndexExpensesSuccess,
  onIndexExpensesFailure
}
