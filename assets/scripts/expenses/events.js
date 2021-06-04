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

module.exports = {
  onCreateExpense,
  onIndexExpenses
}
