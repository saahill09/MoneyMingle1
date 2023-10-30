document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expenseForm');
    const groupMembersSelect = document.getElementById('groupMembers');
    const splitTypeSelect = document.getElementById('splitType');
    const percentageOptions = document.getElementById('percentageOptions');
    const amountOptions = document.getElementById('amountOptions');
    const splitResults = document.getElementById('splitResults');

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get expense details from the form
        const description = document.getElementById('expenseDescription').value;
        const amount = parseFloat(document.getElementById('expenseAmount').value);
        const selectedMembers = Array.from(groupMembersSelect.selectedOptions).map(option => option.value);

        // Get split type and options
        const splitType = splitTypeSelect.value;
        let splitOptions;
        if (splitType === 'percentage') {
            splitOptions = parseFloat(document.getElementById('percentageInput').value);
        } else if (splitType === 'amount') {
            splitOptions = parseFloat(document.getElementById('amountInput').value);
        }

        // Calculate split amounts based on selected split type and options
        const splitAmounts = calculateSplit(amount, selectedMembers.length, splitType, splitOptions);
        
        // Display split results
        displaySplitResults(description, selectedMembers, splitAmounts);
    });

    // Show/hide percentage and amount options based on split type
    splitTypeSelect.addEventListener('change', function() {
        if (splitTypeSelect.value === 'percentage') {
            percentageOptions.classList.remove('hidden');
            amountOptions.classList.add('hidden');
        } else if (splitTypeSelect.value === 'amount') {
            percentageOptions.classList.add('hidden');
            amountOptions.classList.remove('hidden');
        } else {
            percentageOptions.classList.add('hidden');
            amountOptions.classList.add('hidden');
        }
    });

    function calculateSplit(totalAmount, numberOfMembers, splitType, splitOptions) {
        let splitAmounts = [];

        if (splitType === 'equal') {
            const individualAmount = totalAmount / numberOfMembers;
            splitAmounts = Array(numberOfMembers).fill(individualAmount);
        } else if (splitType === 'percentage') {
            const totalPercentage = splitOptions * numberOfMembers;
            const individualPercentage = totalPercentage / 100;
            const individualAmount = totalAmount * individualPercentage;
            splitAmounts = Array(numberOfMembers).fill(individualAmount);
        } else if (splitType === 'amount') {
            const individualAmount = splitOptions;
            splitAmounts = Array(numberOfMembers).fill(individualAmount);
        }

        return splitAmounts;
    }

    function displaySplitResults(description, members, amounts) {
        splitResults.innerHTML = '';
        for (let i = 0; i < members.length; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = `${description} - ${members[i]}: $${amounts[i].toFixed(2)}`;
            splitResults.appendChild(listItem);
        }
    }
});
