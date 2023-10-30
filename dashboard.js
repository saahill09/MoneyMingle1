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
            loadPage('overview.html', overviewSection);            
            break;
        case 'transactions':
            loadPage('transaction.html', transactionsSection);
            break;
        case 'makeGroup':
            loadPage('makeGroup.html', makeGroupSection);
            break;
        case 'splitExpense':
            loadPage('splitExpense.html', splitExpenseSection);
            break;
        case 'history':
            loadPage('history.html', historySection);
            break;
        case 'budget':
            loadPage('budget.html', budgetSection);
            break;
        case 'wallet':
            loadPage('wallet.html', walletSection);
            break;
    }
}

function loadPage(pageUrl, targetElement) {
    fetch(pageUrl)
        .then(response => response.text())
        .then(data => {
            targetElement.innerHTML = data;
            console.log(`Loaded content from ${pageUrl}`); // Add this line for debugging
        })
        .catch(error => {
            console.error('Error:', error);
        });
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
