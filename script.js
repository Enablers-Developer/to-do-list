document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const todoList = document.getElementById('todoList');

    // Function to create a new task
    const createTask = (task) => {
        const li = document.createElement('li');
        li.textContent = task;

        // Mark task as completed
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the click event on li
            todoList.removeChild(li);
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    };

    // Event listener for adding a new task
    addTaskButton.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            createTask(task);
            taskInput.value = ''; // Clear input after adding task
        }
    });

    // Allow pressing "Enter" to add a task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
