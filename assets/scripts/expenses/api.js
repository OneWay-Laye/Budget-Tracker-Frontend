const config = require('./../config.js')
const store = require('./../store')

// This is the api request to create an expense
const createExpense = (data) => {
  return $.ajax({
    url: config.apiUrl + '/create-expense',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data
  })
}

const updateExpense = (data, expenseId) => {
  return $.ajax({
    url: `${config.apiUrl}/update-expense/${expenseId}`,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data
  })
}

const showOneExpense = (data) => {

}

const showAllExpenses = () => {
  return $.ajax({
    url: config.apiURL + '/expense',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const deleteExpense = (data) => {

}

module.exports = {
  createExpense,
  updateExpense,
  showOneExpense,
  showAllExpenses,
  deleteExpense
}
