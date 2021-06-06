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
    <div class="perExpenseSection" data-id=${expense._id}>
      <h4 class='expenseName'>Expense: ${expense.company}</h4>
      <h2 class='expenseAmount'>Amount: $${expense.amount}</h2>
      <p class='expenseDate'>Date: ${expense.due}</p>
      <p class='expenseId' data-id=${expense._id}>ID: ${expense._id}</p>
      <button class="showUpdate">Update</button>
      <button data-id=${expense._id} class="delete">Delete</button>
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
  <div class="perExpenseSection" data-id=${res.authExpense._id}>
    <h4 class='expenseName'>Expense: ${res.authExpense.company}</h4>
    <h2 class='expenseAmount'>Amount: $${res.authExpense.amount}</h2>
    <p class='expenseDate'>Date: ${res.authExpense.due}</p>
    <p class='expenseId' data-id=${res.authExpense._id}>ID: ${res.authExpense._id}</p>
    <button class="showUpdate">Update</button>
    <button data-id=${res.authExpense._id} class="delete">Delete</button>
  </div>
  `

  $('#expenseBoard').html(expenseHtml)
}

const showExpenseFailure = (res) => {
  $('#message').text('There was error showing expense')
}

const loadUpdateForm = () => {
  console.log('in LUF')
  const expense = $(event.target).parent().data('id')

  $(event.target).parent().append(`<div class="updateForm-Section">
    <form class="updateForm" data-id=${expense}>
      <h5>Update Expense</h5>
      <label>Name your expense</label>
      <input name="expense[company]" type="text" placeholder=" Enter Expense or Bill">
      <label>Total Amount $</label>
      <input name="expense[amount]" type="text" placeholder="Enter Amount">
      <label>Date</label>
      <input name="expense[due]" type="date" placeholder="MM/DD/YY(YYYY)">
      <button type="submit" data-id=${expense}>Submit Update</button>
    </form>
  <div>`)
}

const onDeleteExpenseSuccess = () => {
  console.log('its gone')
  $('#message').text('Successfully Deleted Expense')
  const parent = $(event.target).parent()
  console.log(parent)
  const grandParent = parent.parent()

  console.log(grandParent)
  $(grandParent).hide()
}

const onUpdateExpenseSuccess = () => {
  $('#message').text('Successfully Created Expense')
}

const onUpdateExpenseFailure = () => {

}

module.exports = {
  onExpenseCreationSuccess,
  onExpenseCreationFailure,
  onIndexExpensesSuccess,
  onIndexExpensesFailure,
  showExpenseSuccess,
  showExpenseFailure,
  loadUpdateForm,
  onDeleteExpenseSuccess,
  onUpdateExpenseSuccess,
  onUpdateExpenseFailure
}
