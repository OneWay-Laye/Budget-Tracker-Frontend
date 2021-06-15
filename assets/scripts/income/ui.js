const store = require('./../store')

const onGetIncomeSuccess = (res) => {
  console.log(res[0].monthlyIncome)
  const income = res[0].monthlyIncome
  $('#totalIncome').text(income)
}

module.exports = {
  onGetIncomeSuccess
}
