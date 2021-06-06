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

const showOneExpense = (expenseId) => {
  return $.ajax({
    url: `${config.apiUrl}/expense/${expenseId}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const showAllExpenses = () => {
  return $.ajax({
    url: config.apiUrl + '/expense',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const deleteExpense = (id) => {
  return $.ajax({
    url: config.apiUrl + '/expense/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  createExpense,
  updateExpense,
  showOneExpense,
  showAllExpenses,
  deleteExpense
}
