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
      <h4 class='expenseName'>Expense: ${expense.company}</h4>
      <h2 class='expenseAmount'>Amount: $${expense.amount}</h2>
      <p class='expenseDate'>Date: ${expense.due}</p>
      <p class='expenseId'>ID: ${expense._id}</p>
      <button class="showUpdate">Update</button>
      <button class="delete">Delelete</button>
    </div>
    `
  })

  $('#expenseBoard').html(expenseHtml)
  $('.updateForm-Section').hide()
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
    <div class="updateFormPer"></div>
    <button class="showUpdate">Update</button>
    <button class="delete">Delelete</button>
  </div>
  `

  $('#expenseBoard').html(expenseHtml)
  $('.updateForm-Section').hide()
}

const showExpenseFailure = (res) => {
  $('#message').text('There was error showing expense')
}

const loadUpdateForm = () => {
  console.log('in LUF')

  $(event.target).parent().append(`<div class="updateForm-Section">
    <form id="updateForm">
      <h5>Update Expense</h5>
      <label>Name your expense</label>
      <input name="expense[company]" type="text" placeholder=" Enter Expense or Bill">
      <label>Total Amount $</label>
      <input name="expense[amount]" type="text" placeholder="Enter Amount">
      <label>Date</label>
      <input name="expense[due]" type="date" placeholder="MM/DD/YY(YYYY)">
      <button type="submit">Submit Update</button>
    </form>
  <div>`)
}

module.exports = {
  onExpenseCreationSuccess,
  onExpenseCreationFailure,
  onIndexExpensesSuccess,
  onIndexExpensesFailure,
  showExpenseSuccess,
  showExpenseFailure,
  loadUpdateForm
}
