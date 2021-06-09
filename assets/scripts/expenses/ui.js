const store = require('./../store')

const onExpenseCreationSuccess = (res) => {
  console.log('successfully created expense')
  $('#newExpense-Section').hide()
  store.expense = res.expense
  console.log(store.expense)

  $('#newExpense').trigger('reset')
  $('#message').text(`Successfully Created Expense for ${res.expense.company}. Show expenses to see new Expense`)
  $('#expenseBoard').text('')
}

const onExpenseCreationFailure = (res) => {
  $('#message').text('Error Creating Expense')
}

const onIndexExpensesSuccess = (res) => {
  let expenseHtml = ''

  res.forEach(expense => {
    expenseHtml += `
    <div class="perExpenseSection row" data-id=${expense._id}>
      <h2 class='expenseName col-9'>Expense: ${expense.company}</h2>
      <h5 class='expenseAmount col-3'>Amount: $${expense.amount}</h5>
      <p class='expenseDate col-6'>Date: ${expense.due}</p>
      <p class='expenseId col-6' data-id=${expense._id}>ID: ${expense._id}</p>
      <button class="showUpdate greenWord btn btn-dark col-6">Update</button>
      <button class="delete btn btn-dark col-6" data-id=${expense._id} class="delete">Delete</button>
    </div>
    `
  })

  $('#expenseBoard').html(expenseHtml)
  $('.updateForm-Section').hide()
}

const onIndexExpensesFailure = (res) => {
}

const showExpenseSuccess = (res) => {
  const expenseHtml = `
  <div class="perExpenseSection row" data-id=${res.authExpense._id}>
    <h2 class='expenseName col-9'>Expense: ${res.authExpense.company}</h2>
    <h5 class='expenseAmount col-3'>Amount: $${res.authExpense.amount}</h5>
    <p class='expenseDate col-6'>Date: ${res.authExpense.due}</p>
    <p class='expenseId col-6' data-id=${res.authExpense._id}>ID: ${res.authExpense._id}</p>
    <button class="showUpdate greenWord btn btn-dark col-6">Update</button>
    <button class="delete btn btn-dark col-6" data-id=${res.authExpense._id} class="delete">Delete</button>
  </div>
  `

  $('#expenseBoard').html(expenseHtml)
}

const showExpenseFailure = (res) => {
  $('#message').text('There was error showing expense')
}

const loadUpdateForm = () => {
  const expense = $(event.target).parent().data('id')

  $(event.target).parent().append(`<div class="updateForm-Section">
    <form class="updateForm row" data-id=${expense}>
      <h5 class="col-12" >Update Expense</h5>
      <label class="col-4 updateFormLabel">Name your expense</label>
      <input name="expense[company]" class="col-7" type="text" placeholder=" Enter Expense or Bill">
      <label class="col-4 updateFormLabel">Total Amount $</label>
      <input name="expense[amount]" class="col-7" type="text" placeholder="Enter Amount">
      <label class="col-4 updateFormLabel">Date</label>
      <input name="expense[due]" class="col-7" type="date" placeholder="MM/DD/YY(YYYY)">
      <button class="btn greenWord btn-dark col-6 offset-md-3" type="submit" data-id=${expense}>Submit Update</button>
    </form>
    <button class="btn btn-dark cancelUpdate">Cancel Update</button>
  <div>`)

  $('.showUpdate').hide()
  $('.delete').addClass('col-12')
}

const onDeleteExpenseSuccess = () => {
  $('#message').text('Successfully Deleted Expense. Click show expenses to view changes')
  $('#expenseBoard').text('')
}

const onUpdateExpenseSuccess = () => {
  $('#message').text('Successfully Updated Expense. Click show expenses to view changes')
  $('.showUpdate').show()
  $('.delete').removeClass('col-12')
  $('.updateForm-Section').hide()
  $('.updateForm').trigger('reset')
  $('#expenseBoard').text('')
}

const onUpdateExpenseFailure = (res) => {
  $('#message').text('There was an error updating your expense')
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
