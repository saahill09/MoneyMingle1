const dashboardContent = document.querySelector('.dashboard-content');
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
