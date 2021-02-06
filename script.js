// login button event handler
const login = document.getElementById('login')
login.addEventListener('click', function() {
  const loginArea = document.getElementById('login-area')
  loginArea.style.display = 'none'

  const transactionArea = document.getElementById('transaction-area')
  transactionArea.style.display = 'block'
})

// deposit button event handler
const addDeposit = document.getElementById('add-deposit')
addDeposit.addEventListener('click', function(event) {
  const depositNumber = getInputNumber('deposit-amount')

  updateSpanText('current-deposit', depositNumber)
  updateSpanText('current-balance', depositNumber)

  document.getElementById('deposit-amount').value = ''
})

// withdraw button event handler
const addWithdraw = document.getElementById('add-withdraw')
addWithdraw.addEventListener('click', function() {
  const withdrawNumber = getInputNumber('withdraw-amount')
  
  updateSpanText('current-withdraw', withdrawNumber)
  updateSpanText('current-balance', -1 * withdrawNumber)

  document.getElementById('withdraw-amount').value = ''
})

function getInputNumber(id) {
  const amount = document.getElementById(id).value
  const amountNumber = parseFloat(amount)
  return amountNumber
}

function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText
  const currentNumber = parseFloat(current)
  const totalAmount = currentNumber + depositNumber
  document.getElementById(id).innerText = totalAmount
}