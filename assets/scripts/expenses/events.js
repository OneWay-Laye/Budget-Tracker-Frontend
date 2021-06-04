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

module.exports = {
  onCreateExpense,
  onIndexExpenses,
  onShowExpense
}
