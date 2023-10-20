const sidebarItems = document.querySelectorAll('.sidebar li');
const overviewSection = document.getElementById('overviewSection');
const transactionsSection = document.getElementById('transactionsSection');
const makeGroupSection = document.getElementById('makeGroupSection');
const splitExpenseSection = document.getElementById('splitExpenseSection');
const historySection = document.getElementById('historySection');
const budgetSection = document.getElementById('budgetSection');
const walletSection = document.getElementById('walletSection');

function showContent(option) {
    hideAllSections();
    switch (option) {
        case 'overview':
            overviewSection.style.display = 'block';
            break;
        case 'transactions':
            transactionsSection.style.display = 'block';
            break;
        case 'makeGroup':
            makeGroupSection.style.display = 'block';
            break;
        case 'splitExpense':
            splitExpenseSection.style.display = 'block';
            break;
        case 'history':
            historySection.style.display = 'block';
            break;
        case 'budget':
            budgetSection.style.display = 'block';
            break;
        case 'wallet':
            walletSection.style.display = 'block';
            break;
    }
}

function hideAllSections() {
    overviewSection.style.display = 'none';
    transactionsSection.style.display = 'none';
    makeGroupSection.style.display = 'none';
    splitExpenseSection.style.display = 'none';
    historySection.style.display = 'none';
    budgetSection.style.display = 'none';
    walletSection.style.display = 'none';
}

// Initial hide for all sections
hideAllSections();

sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'active' class from all sidebar items
        sidebarItems.forEach(item => item.classList.remove('active'));

        // Add 'active' class to the clicked item
        item.classList.add('active');

        // Clear previous content
        hideAllSections();

        // Load content based on the clicked option
        const option = item.textContent.trim().toLowerCase();
        if (option === 'overview') {
            overviewSection.style.display = 'block';
        } else if (option === 'transactions') {
            transactionsSection.style.display = 'block';
        } else if (option === 'make group') {
            makeGroupSection.style.display = 'block';
        } else if (option === 'split expense') {
            splitExpenseSection.style.display = 'block';
        } else if (option === 'history') {
            historySection.style.display = 'block';
        } else if (option === 'budget') {
            budgetSection.style.display = 'block';
        } else if (option === 'wallet') {
            walletSection.style.display = 'block';
        }
    });
});
