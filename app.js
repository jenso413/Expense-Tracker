let expense = document.getElementById('name');
let date = document.getElementById('date');
let amount = document.getElementById('amount');

let tableBody = document.getElementById('table-body')

document.getElementById('add-expense').addEventListener('click', function() {
    // Create new Row
    let newRow = document.createElement('tr');

    // Append new row to table body
    tableBody.appendChild(newRow);

    // Create table data for each respective element
    let newName = document.createElement('td');
    let newDate = document.createElement('td');
    let newAmount = document.createElement('td');

    // Add input values as text content of td's
    newName.textContent = expense.value;
    newDate.textContent = date.value;
    newAmount.textContent = amount.value;

    // Append td's to the new row
    newRow.appendChild(newName);
    newRow.appendChild(newDate);
    newRow.appendChild(newAmount);

    // Clear inputs
    expense.value = '';
    date.value = '';
    amount.value = '';
    
})