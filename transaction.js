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
