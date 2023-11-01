document.addEventListener('DOMContentLoaded', () => {
    const transactionForm = document.getElementById('transactionForm');
    const transactionList = document.getElementById('transactionList');

    transactionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const amount = parseFloat(document.getElementById('amount').value);
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;
        const category = document.getElementById('category').value;

        
        
    });
});

// transaction.js

// Get references to the form and transactionList elements
const transactionForm = document.getElementById('transactionForm');
const transactionList = document.getElementById('transactionList');

// Initialize an array to store transactions (you can use a database in a real application)
const transactions = [];

// Function to add a new transaction
function addTransaction(amount, description, date) {
    const transaction = {
        amount: parseFloat(amount),
        description: description,
        date: date
    };
    transactions.push(transaction);
}

// Function to display transactions
function displayTransactions() {
    // Clear the existing list
    transactionList.innerHTML = '';

    // Loop through transactions and create list items
    transactions.forEach((transaction, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('transaction-item');
        listItem.innerHTML = `
            <p><strong>Amount:</strong> $${transaction.amount.toFixed(2)}</p>
            <p><strong>Description:</strong> ${transaction.description}</p>
            <p><strong>Date:</strong> ${transaction.date}</p>
        `;
        transactionList.appendChild(listItem);
    });
}

// Event listener for form submission
transactionForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;

    // Validate input
    if (!amount || !description || !date) {
        alert('Please fill in all fields');
        return;
    }

    // Add the transaction
    addTransaction(amount, description, date);

    // Display the updated transaction list
    displayTransactions();

    // Clear the form
    transactionForm.reset();
});

// Initial display of transactions
displayTransactions();


// const firebaseConfig = {
//     apiKey: "AIzaSyCEjsup8jfS5A_baCVzxCwo8orU8MfYtmQ",
//     authDomain: "moneymingle-ebc1a.firebaseapp.com",
//     databaseURL: "https://moneymingle-ebc1a-default-rtdb.firebaseio.com",
//     projectId: "moneymingle-ebc1a",
//     storageBucket: "moneymingle-ebc1a.appspot.com",
//     messagingSenderId: "108734493528",
//     appId: "1:108734493528:web:a8c99554ece9af3970ab2d"
//   };
 
//   // Initialize Firebase (as shown earlier)
// firebase.initializeApp(firebaseConfig);

// // Reference to the Firebase database
// const database = firebase.database();

// // Reference to the expenses data in the database
// const expensesRef = database.ref('expenses');


// // Reference to HTML elements
// const addExpenseForm = document.getElementById('add-expense-form');
// const expenseNameInput = document.getElementById('expense-name');
// const expenseAmountInput = document.getElementById('expense-amount');
// const expenseList = document.getElementById('expense-list');

// // Event listener for the "Add Expense" form
// addExpenseForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const name = expenseNameInput.value;
//     const amount = parseFloat(expenseAmountInput.value);

//     // Check if the name and amount are valid
//     if (!name || isNaN(amount)) {
//         alert('Please enter a valid expense name and amount.');
//         return;
//     }

//     // Create an expense object
//     const expense = {
//         name: name,
//         amount: amount,
//         timestamp: firebase.database.ServerValue.TIMESTAMP,
//     };

//     // Add the expense to Firebase
//     expensesRef.push(expense);

//     // Clear the form inputs
//     expenseNameInput.value = '';
//     expenseAmountInput.value = '';
// });

// // Event listener for displaying expenses
// expensesRef.on('child_added', function (snapshot) {
//     const expense = snapshot.val();
//     const listItem = document.createElement('li');
//     listItem.textContent = `${expense.name}: ₹${expense.amount.toFixed(2)}`;
//     expenseList.appendChild(listItem);
// });

