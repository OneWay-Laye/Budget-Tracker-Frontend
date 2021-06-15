const config = require('./../config.js')
const store = require('./../store')

const updateIncome = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/update-income/`,
    method: 'PATCH',
    data
  })
}

const getIncome = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/income`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${data}`
    }
  })
}

module.exports = {
  updateIncome,
  getIncome
}
