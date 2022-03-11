const expense = document.getElementById('name');
const date = document.getElementById('date');
const amount = document.getElementById('amount');
const remove = document.getElementById('delete');


const tableBody = document.getElementById('table-body')

document.getElementById('add-expense').addEventListener('click', function() {
    // Create new Row
    let newRow = document.createElement('tr');

    // Append new row to table body
    tableBody.appendChild(newRow);

    // Create table data for each respective element
    let newName = document.createElement('td');
    let newDate = document.createElement('td');
    let newAmount = document.createElement('td');
    let removeItem = document.createElement('td');

    // Add input values as text content of td's
    newName.textContent = expense.value;
    newDate.textContent = date.value;
    newAmount.textContent = amount.value;

    // Add delete icon as content of remove td
    removeItem.innerHTML = '<i class="fas fa-times"></i>'

    // Add center class to icon in td
    removeItem.classList.add('center')

    // Append td's to the new row
    newRow.appendChild(newName);
    newRow.appendChild(newDate);
    newRow.appendChild(newAmount);
    newRow.appendChild(removeItem);

    // Clear inputs
    expense.value = '';
    date.value = '';
    amount.value = '';

    // Adding event listener to delete button. Need to do it here because removeItem is not global
    removeItem.addEventListener('click', function() {
        // Removes table row on click
        this.parentElement.remove();
    })
    
})

