document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const categoryInput = document.getElementById("category");
  const amountInput = document.getElementById("amount");
  const addExpenseButton = document.getElementById("add-expense");
  const expensesList = document.getElementById("expenses-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotal();

  renderExpenses();
  updateTotal();
  expenseForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const category = categoryInput.value.trim();
    const amount = parseFloat(amountInput.value);
    if (category !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        category,
        amount,
      };
      expenses.push(newExpense);
      saveExpenseToLocal(expenses);
      renderExpenses();
      updateTotal();
      categoryInput.value = "";
      amountInput.value = "";
    }
  });

  expensesList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const expenseId = parseInt(event.target.getAttribute("data-id"));
      expenses = expenses.filter((expense) => expense.id !== expenseId);
      saveExpenseToLocal(expenses);
      renderExpenses();
      updateTotal();
    }
  });

  function calculateTotal() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  function saveExpenseToLocal(expenses) {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  function updateTotal() {
    totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  function renderExpenses() {
    expensesList.innerHTML = "";
    expenses.forEach((expense) => {
      const expenseItem = document.createElement("li");
      expenseItem.innerHTML = `
      ${expense.category} - $${expense.amount}
      <button data-id=${expense.id} class="expense-dlt-btn">Delete</button>
      `;
      expensesList.appendChild(expenseItem);
    });
  }
});
