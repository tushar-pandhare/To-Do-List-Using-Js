const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Function to add a new task
function addTask() {
    if (inputBox.value.trim() === '') {
        alert("Please write something!");
    } else {
        // Create a list item
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;

        // Create a delete button (span)
        const span = document.createElement('span');
        span.innerHTML = "\u00D7"; // Unicode for the × symbol
        li.appendChild(span);

        // Append the new task to the list
        listContainer.appendChild(li);

        // Clear the input field
        inputBox.value = '';
        saveData();
    }
}

// Event delegation for list items
listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
});

// Save data to localStorage
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// Load saved tasks on page load
function showList() {
    listContainer.innerHTML = localStorage.getItem('data') || '';
}
showList();




































































































// Code Ended Here
