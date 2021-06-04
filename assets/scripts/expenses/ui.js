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
    <div class="perExpenseSection">
      <h4>Expense: ${expense.company}</h4>
      <h2>Amount: $${expense.amount}</h2>
      <p>Date: ${expense.due}</p>
      <p>ID: ${expense._id}</p>
    </div>
    `
  })
  $('#expenseBoard').html(expenseHtml)
}

const onIndexExpensesFailure = (res) => {
  console.log(res)
}

const showExpenseSuccess = (res) => {
  console.log(res)
  const expenseHtml = `
  <div class="perExpenseSection">
    <h4>Expense: ${res.authExpense.company}</h4>
    <h2>Amount: $${res.authExpense.amount}</h2>
    <p>Date: ${res.authExpense.due}</p>
    <p>ID: ${res.authExpense._id}</p>
  </div>
  `

  $('#expenseBoard').html(expenseHtml)
}

const showExpenseFailure = (res) => {
  $('#message').text('There was error showing expense')
}

module.exports = {
  onExpenseCreationSuccess,
  onExpenseCreationFailure,
  onIndexExpensesSuccess,
  onIndexExpensesFailure,
  showExpenseSuccess,
  showExpenseFailure
}
