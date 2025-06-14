let tasks = [];
let currentEditIndex = -1;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        taskInput.value = '';
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    currentEditIndex = index;
    document.getElementById('editInput').value = tasks[index];
    document.getElementById('modal').style.display = 'flex';
}

function saveEdit() {
    const editInput = document.getElementById('editInput');
    const newText = editInput.value.trim();
    if (newText && currentEditIndex !== -1) {
        tasks[currentEditIndex] = newText;
        renderTasks();
        closeModal();
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    currentEditIndex = -1;
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <div>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

document.querySelector('.close').onclick = closeModal;
window.onclick = (event) => {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
};