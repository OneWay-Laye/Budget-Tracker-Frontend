const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateExpense = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.createExpense(data)
    .then(ui.onExpenseCreationSuccess)
    .catch(ui.onExpenseCreationFailure)
}

const onCancelCreation = (event) => {
  $('#newExpense').trigger('reset')
  $('#newExpense-Section').hide()
}

const onShowCreateForm = (event) => {
  $('#newExpense-Section').show()
  $('expenseBoard').text('')
}

const onIndexExpenses = (event) => {
  event.preventDefault()

  api.showAllExpenses()
    .then(ui.onIndexExpensesSuccess)
    .catch(ui.onIndexExpensesFailure)
}

const onShowExpense = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  const id = data.expense.id
  console.log(id)

  api.showOneExpense(id)
    .then(ui.showExpenseSuccess)
    .catch(ui.showExpenseFailure)
}

const onloadUpdate = (event) => {
  event.preventDefault()
  ui.loadUpdateForm()
}

const onCancelUpdate = (event) => {
  $('.updateForm-Section').hide()
  $('.delete').removeClass('col-12')
  $('.showUpdate').show()
}

const onUpdateExpense = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  const parent = $(event.target).parent()
  const grandParent = parent.parent()

  console.log(grandParent)

  console.log(data, id)

  api.updateExpense(data, id)
    .then(ui.onUpdateExpenseSuccess)
    .catch(ui.onUpdateExpenseFailure)
}

const onDeleteExpense = (event) => {
  event.preventDefault()

  const id = $(event.target).data('id')

  api.deleteExpense(id)
    .then(ui.onDeleteExpenseSuccess)
}

module.exports = {
  onCreateExpense,
  onIndexExpenses,
  onShowExpense,
  onUpdateExpense,
  onDeleteExpense,
  onloadUpdate,
  onShowCreateForm,
  onCancelUpdate,
  onCancelCreation
}
